/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#6A0D25',
          light: '#8B1A34',
          dark: '#4A0918',
          50: '#FFF0F3',
          100: '#FFD6DE',
          900: '#3A0710',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8CC6A',
          dark: '#B8920A',
          50: '#FFFBEB',
          100: '#FEF3C7',
        },
        cream: {
          DEFAULT: '#FDF6EC',
          dark: '#F5E8D0',
          darker: '#EDD8B0',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slow-spin': 'spin 20s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'thread': 'thread 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        thread: {
          '0%, 100%': { strokeDashoffset: '1000' },
          '50%': { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #F5D76E 50%, #D4AF37 100%)',
      },
    },
  },
  plugins: [],
};
