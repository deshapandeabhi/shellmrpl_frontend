export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Monochromatic Slate Theme based on #94A3B8 */
        /* Primary Palette */
        shellYellow:  '#CBD5E1', /* Slate 300 - lighter accent */
        shellRed:     '#64748B', /* Slate 500 - contrasting accent */
        shellWhite:   '#F8FAFC', /* Slate 50 - off-white */
        /* Functional Greys */
        grey50:       '#F8FAFC',
        grey100:      '#F1F5F9',
        grey200:      '#E2E8F0',
        grey300:      '#CBD5E1',
        grey400:      '#94A3B8', /* Base Color */
        grey500:      '#64748B',
        grey600:      '#475569',
        grey700:      '#334155',
        grey800:      '#1E293B',
        grey900:      '#0F172A',
        /* Nature-Inspired Secondary (Mapped to Slate) */
        sunrise300:   '#94A3B8',
        sunset500:    '#64748B',
        seaweed300:   '#E2E8F0',
        forest500:    '#475569',
        ocean400:     '#475569',
        night600:     '#0F172A',
        stone300:     '#CBD5E1',
      },
      fontFamily: {
        shell: ['Shell', 'sans-serif'],
        shellCondensed: ['"Shell Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
