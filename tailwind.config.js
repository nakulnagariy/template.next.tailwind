module.exports = {
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    typography: (theme) => ({}),
    extend: {
      width: {
        '1/7': '14.2857143%',
      },
      colors: {
        primary: '#204e4a',
        secondary: '#297045',
        success: '#2e933c',
        danger: '#dc3545',
        warning: '#ecba82',
        info: '#17a2b8',
        light: '#f1f5f9',
        dark: '#f1f5f9',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      textShadow: {
        md: '2px 2px 4px rgb(0 0 0 / 45%);',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}
