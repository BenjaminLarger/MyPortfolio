import { useEffect, useState } from 'react';

const SmoothCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const checkHoverState = (e: MouseEvent) => {
      const target = e.target as Element;
      const isInteractable = target.matches('a, button, [role="button"], input, textarea, select, .cursor-hover') || 
                            target.closest('a, button, [role="button"], input, textarea, select, .cursor-hover');
      setIsHovering(!!isInteractable);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousemove', checkHoverState);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousemove', checkHoverState);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out ${
          isClicking 
            ? 'scale-75 bg-ai-pink shadow-[0_0_20px_rgba(255,0,128,0.8)]' 
            : isHovering
            ? 'scale-150 bg-ai-cyan shadow-[0_0_25px_rgba(0,217,255,0.8)]'
            : 'bg-ai-cyan shadow-[0_0_15px_rgba(0,217,255,0.6)]'
        }`}
        style={{
          left: `${position.x - 4}px`,
          top: `${position.y - 4}px`,
        }}
      />
      
      {/* Outer ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isClicking 
            ? 'scale-75 border-ai-pink border-opacity-60' 
            : isHovering
            ? 'scale-125 border-ai-cyan border-opacity-80'
            : 'border-ai-cyan border-opacity-40'
        }`}
        style={{
          left: `${position.x - 16}px`,
          top: `${position.y - 16}px`,
          borderWidth: '1px',
        }}
      />
      
      {/* Trailing effect */}
      <div
        className={`fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9997] transition-all duration-500 ease-out ${
          isHovering 
            ? 'bg-ai-glow opacity-30 scale-110' 
            : 'bg-ai-glow opacity-10'
        }`}
        style={{
          left: `${position.x - 24}px`,
          top: `${position.y - 24}px`,
        }}
      />
    </>
  );
};

export default SmoothCursor;