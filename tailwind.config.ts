import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#1B5E20',
        'golf-green': '#2E7D32',
        'light-green': '#E8F5E9',
        'sand': '#D4A76A',
        'bg-light': '#FAF8F5',
        'bg-dark': '#F0EDE8',
        'pencil': '#2D2D2D',
        'golf-red': '#C62828',
        'red-light': '#FFEBEE',
        'golf-orange': '#E65100',
        'orange-light': '#FFF3E0',
        'category-blue': '#1565C0',
        'category-purple': '#6A1B9A',
        'category-teal': '#00838F',
        'category-pink': '#AD1457',
        'category-brown': '#4E342E',
      },
      boxShadow: {
        'golf-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'golf-md': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'golf-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'golf': '0.75rem',
        'golf-lg': '1.25rem',
        'golf-full': '9999px',
      },
      maxWidth: {
        'mobile': '520px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'progress-pulse': 'progress-pulse 1.5s ease-in-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      keyframes: {
        'progress-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'slide-in': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
