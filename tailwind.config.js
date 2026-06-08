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
        shellWhite:   '#FBF8F4',
        /* Functional Greys */
        grey50:       '#FCFCFB',
        grey100:      '#E0E0E0',
        grey200:      '#C0C0C0',
        grey300:      '#AAAAAA',
        grey400:      '#919191',
        grey500:      '#757575',
        grey600:      '#616161',
        grey700:      '#2F3437',
        grey800:      '#343434',
        grey900:      '#1F2326',
        /* Nature-Inspired Secondary */
        sunrise300:   '#ED8A00',
        sunset500:    '#D54410',
        seaweed300:   '#A8B11A',
        forest500:    '#008557',
        ocean400:     '#0097A9',
        night600:     '#3B6A9C',
        stone300:     '#B6B099',
      },
      fontFamily: {
        shell: ['Shell', 'sans-serif'],
        shellCondensed: ['"Shell Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
