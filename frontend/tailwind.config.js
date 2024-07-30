/** @type {import('tailwindcss').Config} */
module.exports = module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-black': '#161617CC',
        'custom-cream': '#FFF5E1',
        'custom-cream-1': '#A59079',
        'custom-red': '#F5004F',
        'custom-orange': '#FFB200',
        'custom-yellow': '#FFDE4D',
        'custom-blue': '#7C00FE',
        'custom-green-1': '#B4E380',
        'custom-green-2': '#88D66C',
        'custom-green-3': '#73BBA3',
      },
      height: {
        'half-screen': '50vh',
      },
      width: {
        'cut-10': '80vw',
      },
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
