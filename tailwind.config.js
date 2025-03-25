/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        40: 'repeat(40, minmax(0, 1fr))',
      },

      gridTemplateRows: {
        40: 'repeat(40, minmax(0, 1fr))',
      },
      rotate: {
        6: '6deg',
        12: '12deg',
        '-12': '-12deg',
      },
      backgroundImage: {
        headerVector: "url('/images/vector5.png')",
      },
      colors: {
        primary: '#00672E',
        mainBg: '#efecea',
      },
    },
  },
  plugins: [],
};
