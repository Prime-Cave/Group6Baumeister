/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    extend: {
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
