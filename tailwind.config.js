/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF6E9',
          100: '#F7ECC6',
          200: '#EFD98E',
          300: '#E4C561',
          400: '#D4AF37',
          500: '#C29E2E',
          600: '#A8841F',
          700: '#876A18',
          800: '#6B5214',
          900: '#4E3B0F',
        },
        ink: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#C4C4C4',
          300: '#9E9E9E',
          400: '#6B6B6B',
          500: '#4A4A4A',
          600: '#2E2E2E',
          700: '#1F1F1F',
          800: '#141414',
          900: '#0A0A0A',
          950: '#050505',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212, 175, 55, 0)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
