/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      height: {
        1250: 1250,
      },
      fontFamily: {
        outfit: 'Outfit, sans-serif',
      },
      width: {
        quarter: '85%',
        'nine-tenths': '90%',
      },
      gridColumnStart: {
        16: '16',
        23: '23',
        26: '26',
        28: '28',
      },
      gridColumnEnd: {
        20: '20',
        23: '23',
        31: '31',
        36: '36',
        39: '39',
        50: '50',
      },
      gridRowStart: {
        18: '18',
        24: '24',
        28: '28',
        30: '30',
      },
      gridRowEnd: {
        15: '15',
        16: '16',
        27: '27',
        28: '28',
        31: '31',
        35: '35',
        40: '40',
      },

      gridTemplateColumns: {
        40: 'repeat(40, minmax(0, 1fr))',
      },

      gridTemplateRows: {
        40: 'repeat(40, minmax(0, 1fr))',
      },

      backgroundImage: {
        'header-Vector': "url('/images/vector5.png')",
      },

      colors: {
        primary: '#00672E',
        secondary: '#efecea',
      },
    },
  },
  plugins: [],
};
