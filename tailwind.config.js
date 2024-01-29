export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2647',
        antiprimary: '#DBE2EF',
        secondary: '#144272',
        antisecondary: '#F9F7F7',
        tertiary: '#7077A1',
        antitertiary: '#E3FDFD',
        quaternary: '#2C74B3',
        antiquaternary: '#CBF1F5',
      },
    },
  },
  plugins: [],
}
