import React, { useEffect, useRef, useState, useCallback } from 'react';

interface IconCloudProps {
  images: string[];
  className?: string;
}

interface Icon {
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  img: HTMLImageElement;
  alpha: number;
  scale: number;
}

const IconCloud: React.FC<IconCloudProps> = ({ images, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [icons, setIcons] = useState<Icon[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const radius = useRef(120);
  const angleX = useRef(0);
  const angleY = useRef(0);
  const targetAngleX = useRef(0);
  const targetAngleY = useRef(0);

  const createIcons = useCallback(async () => {
    const iconPromises = images.map(async (src, index) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      return new Promise<Icon>((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error(`Timeout loading ${src}`));
        }, 10000); // 10 second timeout
        
        img.onload = () => {
          clearTimeout(timeout);
          const phi = Math.acos(-1 + (2 * index) / images.length);
          const theta = Math.sqrt(images.length * Math.PI) * phi;
          
          resolve({
            x: radius.current * Math.cos(theta) * Math.sin(phi),
            y: radius.current * Math.sin(theta) * Math.sin(phi),
            z: radius.current * Math.cos(phi),
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            img,
            alpha: 1,
            scale: 1,
          });
        };
        img.onerror = () => {
          clearTimeout(timeout);
          console.warn(`Failed to load icon: ${src}`);
          reject(new Error(`Failed to load ${src}`));
        };
        img.src = src;
      });
    });

    try {
      const results = await Promise.allSettled(iconPromises);
      const loadedIcons = results
        .filter((result): result is PromiseFulfilledResult<Icon> => result.status === 'fulfilled')
        .map(result => result.value);
      
      if (loadedIcons.length === 0) {
        console.error('No icons could be loaded');
        return;
      }
      
      setIcons(loadedIcons);
      setIsLoaded(true);
    } catch (error) {
      console.error('Error loading icons:', error);
    }
  }, [images]);

  const rotateIcon = (icon: Icon, angleX: number, angleY: number): Icon => {
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);

    const y1 = icon.y * cosX - icon.z * sinX;
    const z1 = icon.y * sinX + icon.z * cosX;
    const x1 = icon.x * cosY + z1 * sinY;
    const z2 = -icon.x * sinY + z1 * cosY;

    return {
      ...icon,
      x: x1,
      y: y1,
      z: z2,
      rotateX: angleX,
      rotateY: angleY,
    };
  };

  const animationFrameRef = useRef<number>();

  const animate = useCallback(() => {
    if (!canvasRef.current || !isLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2 / window.devicePixelRatio;
    const centerY = canvas.height / 2 / window.devicePixelRatio;

    // Smooth angle interpolation
    angleX.current += (targetAngleX.current - angleX.current) * 0.02;
    angleY.current += (targetAngleY.current - angleY.current) * 0.02;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const rotatedIcons = icons.map(icon => rotateIcon(icon, angleX.current, angleY.current));
    
    // Sort by z-index (back to front)
    rotatedIcons.sort((a, b) => a.z - b.z);

    rotatedIcons.forEach(icon => {
      const scale = (radius.current * 2 - icon.z) / (radius.current * 2);
      const alpha = Math.max(0.4, Math.min(1, scale * 1.2)); // Improved visibility
      const size = Math.max(25, 40 * scale); // Larger minimum size

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(centerX + icon.x, centerY + icon.y);
      
      // Draw more visible circular background with gradient
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2 + 4);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
      
      ctx.beginPath();
      ctx.arc(0, 0, size / 2 + 4, 0, 2 * Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add subtle border for better definition
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw icon with circular clip
      ctx.beginPath();
      ctx.arc(0, 0, size / 2, 0, 2 * Math.PI);
      ctx.clip();
      
      // Enhance image rendering
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(icon.img, -size / 2, -size / 2, size, size);
      
      ctx.restore();
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [icons, isLoaded]);

  const throttledMouseMove = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    mouseX.current = event.clientX - rect.left - centerX;
    mouseY.current = event.clientY - rect.top - centerY;
    
    targetAngleY.current = (mouseX.current / centerX) * Math.PI * 0.3;
    targetAngleX.current = (mouseY.current / centerY) * Math.PI * 0.3;
  }, []);

  const handleMouseMove = useCallback(
    throttledMouseMove,
    [throttledMouseMove]
  );

  const handleMouseLeave = () => {
    targetAngleX.current = 0;
    targetAngleY.current = 0;
  };

  useEffect(() => {
    createIcons();
  }, [createIcons]);

  useEffect(() => {
    if (isLoaded) {
      animate();
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate, isLoaded]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        canvasRef.current.width = rect.width * window.devicePixelRatio;
        canvasRef.current.height = rect.height * window.devicePixelRatio;
        canvasRef.current.getContext('2d')?.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-gray-300 text-sm">Loading technologies...</p>
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className={`w-full h-full max-w-md mx-auto cursor-pointer touch-manipulation transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          width: '100%', 
          height: 'auto',
          maxWidth: '400px',
          aspectRatio: '1/1'
        }}
      />
    </div>
  );
};

export default IconCloud;