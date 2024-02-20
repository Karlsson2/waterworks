/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'river-blue': '#4D90F4',
        'surface-purple': '#E7E6FC',
        'safety-orange': '#DD7C1B',
        'sand': '#FAF7F7',
        current: 'currentColor',
      },
      backgroundImage: {
        'river-img': "url('/src/img/river.png')",
      }
    },
  },
  plugins: [],
}
