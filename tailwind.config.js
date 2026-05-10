export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Shell Group Brand Identity Standards V2.0 (2026) */
        /* Primary Palette */
        shellYellow:  '#FFC600',
        shellRed:     '#DD1D21',
        shellWhite:   '#FFFFFF',
        /* Functional Greys */
        grey700:      '#4A4A4A',
        grey300:      '#AAAAAA',
        grey50:       '#F5F5F5',
        /* Nature-Inspired Secondary */
        sunrise300:   '#ED8A00',
        sunset500:    '#D54410',
        seaweed300:   '#A8B11A',
        forest500:    '#008557',
        ocean400:     '#0097A9',
        night600:     '#336094',
        stone300:     '#B6B099',
      },
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
        roboto:   ['"Roboto"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
