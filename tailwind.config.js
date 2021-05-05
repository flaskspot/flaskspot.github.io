module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#3366FF',
        primaryLight: '#6690FF',
        primaryDark: '#254EDA',
        secondaryDarkLight: '#28293D',
        terminalDark: '#191919',
        terminalLight: '#373735',
        terminalRed: '#F96057',
        terminalYellow: '#F8CE52',
        terminalGreen: '#5FCF65',
        terminalCyan: '#57baba'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
