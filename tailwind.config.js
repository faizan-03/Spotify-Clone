/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-black': '#121212',
        'spotify-green': '#1DB954',
        'spotify-white': '#FFFFFF',
        'spotify-gray': '#B3B3B3',
        'spotify-light-black': '#282828',
        'spotify-dark-black': '#181818',
      },
      spacing: {
        'sidebar': '240px',
        'player': '90px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
    require("daisyui")
  ],
  daisyui: {
    themes: [{
      light: {
        "primary": "#1DB954",
        "primary-content": "#ffffff",
        "secondary": "#1ed760",
        "accent": "#535353",
        "neutral": "#f3f4f6",
        "base-100": "#ffffff",
        "base-200": "#f3f4f6",
        "base-300": "#e5e7eb",
        "base-content": "#1f2937",
      },
      dark: {
        "primary": "#1DB954",
        "primary-content": "#ffffff",
        "secondary": "#1ed760",
        "accent": "#535353",
        "neutral": "#1f2937",
        "base-100": "#1f2937",
        "base-200": "#111827",
        "base-300": "#374151",
        "base-content": "#f3f4f6",
      },
      spotify: {
        "primary": "#1DB954",
        "primary-content": "#ffffff",
        "secondary": "#1ed760",
        "accent": "#535353",
        "neutral": "#282828",
        "base-100": "#121212",
        "base-200": "#181818",
        "base-300": "#282828",
        "base-content": "#ffffff",
      }
    }],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
  }
} 