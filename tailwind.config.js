module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5F1ED",
          100: "#E8DDD1",
          200: "#D1BBA3",
          300: "#BA9975",
          400: "#A37747",
          500: "#8B4513", // saddle-brown
          600: "#6F370F",
          700: "#53290B",
          800: "#371B07",
          900: "#1B0D04",
          DEFAULT: "#8B4513", // saddle-brown
        },
        secondary: {
          50: "#FAF8F4",
          100: "#F4F0E9",
          200: "#E9E1D3",
          300: "#DDD2BD",
          400: "#D2C3A7",
          500: "#D2B48C", // tan
          600: "#A89070",
          700: "#7E6C54",
          800: "#544838",
          900: "#2A241C",
          DEFAULT: "#D2B48C", // tan
        },
        accent: {
          50: "#FDF9F0",
          100: "#FAF2E1",
          200: "#F5E5C3",
          300: "#F0D8A5",
          400: "#EBCB87",
          500: "#DAA520", // goldenrod
          600: "#AE841A",
          700: "#826313",
          800: "#56420D",
          900: "#2B2106",
          DEFAULT: "#DAA520", // goldenrod
        },
        background: "#FEFEFE", // near-white
        surface: "#F8F6F3", // warm-off-white
        text: {
          primary: "#2C1810", // dark-brown
          secondary: "#6B5B4F", // medium-brown
        },
        success: {
          50: "#F0F8F0",
          100: "#E1F1E1",
          200: "#C3E3C3",
          300: "#A5D5A5",
          400: "#87C787",
          500: "#228B22", // forest-green
          600: "#1B6F1B",
          700: "#145314",
          800: "#0E370E",
          900: "#071B07",
          DEFAULT: "#228B22", // forest-green
        },
        warning: {
          50: "#FFF7F0",
          100: "#FFEFE1",
          200: "#FFDFC3",
          300: "#FFCFA5",
          400: "#FFBF87",
          500: "#FF8C00", // dark-orange
          600: "#CC7000",
          700: "#995400",
          800: "#663800",
          900: "#331C00",
          DEFAULT: "#FF8C00", // dark-orange
        },
        error: {
          50: "#F5F0F0",
          100: "#EBE1E1",
          200: "#D7C3C3",
          300: "#C3A5A5",
          400: "#AF8787",
          500: "#8B0000", // dark-red
          600: "#6F0000",
          700: "#530000",
          800: "#370000",
          900: "#1B0000",
          DEFAULT: "#8B0000", // dark-red
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        caption: ['Crimson Text', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'luxury-sm': '0 2px 8px rgba(139, 69, 19, 0.1)',
        'luxury-md': '0 4px 12px rgba(139, 69, 19, 0.1)',
        'luxury-lg': '0 8px 16px rgba(139, 69, 19, 0.1)',
        'luxury-xl': '0 16px 24px rgba(139, 69, 19, 0.1)',
      },
      borderRadius: {
        'luxury': '4px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '600ms',
        'slower': '800ms',
      },
      animation: {
        'fade-in': 'fadeIn 600ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 800ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}