/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-black': '#0a0a0a',
        'ai-dark': '#111111',
        'ai-gray': '#1a1a1a',
        'ai-light-gray': '#2a2a2a',
        'ai-cyan': '#00d9ff',
        'ai-blue': '#0066ff',
        'ai-purple': '#6600ff',
        'ai-pink': '#ff0080',
        'ai-green': '#00ff88',
        'ai-yellow': '#ffcc00',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'monospace'],
        'sans': ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        'ai-card': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'ai-glow': 'radial-gradient(circle at center, rgba(0,217,255,0.15) 0%, transparent 70%)',
        'ai-border': 'linear-gradient(90deg, #00d9ff, #6600ff, #ff0080)',
        'ai-mesh': 'radial-gradient(ellipse at top, rgba(102,0,255,0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(0,217,255,0.1) 0%, transparent 50%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 20px rgba(0,217,255,0.3)' },
          'to': { boxShadow: '0 0 30px rgba(0,217,255,0.6)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'ai-glow': '0 0 20px rgba(0,217,255,0.3)',
        'ai-card': '0 8px 32px rgba(0,0,0,0.3)',
        'ai-hover': '0 12px 40px rgba(0,217,255,0.2)',
      },
    },
  },
  plugins: [],
}

