module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        '2xl': '1536px',
      },
      colors: {
        'transparent': 'transparent',
        'black': '#000',
        'white': '#fff',
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-light': '#d3dce6',
        'brown': {
          '50': '#fdf8f6',
          '100': '#f2e8e5',
          '200': '#eaddd7',
          '300': '#e0cec7',
          '400': '#d2bab0',
          '500': '#bfa094',
          '600': '#a18072',
          '700': '#977669',
          '800': '#846358',
          '900': '#43302b',
        },
        'purple': {
          '50': '#f7f3fa',
          '100': '#efe8f6',
          '200': '#d7c5e8',
          '300': '#bfa2da',
          '400': '#905dbf',
          '500': '#6017a3',
          '600': '#561593',
          '700': '#48117a',
          '800': '#3a0e62',
          '900': '#2f0b50'
        }
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
    require('flowbite/plugin'),
  ],
}
