export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shellRed: '#dd1d21',
        shellYellow: '#fbc400',
        shellDark: '#121212',
        shellGray: '#f5f5f5'
      },
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
