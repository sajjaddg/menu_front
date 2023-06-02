/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': {
          1: '#2F3A41',
          2: '#525F67',
          3: '#BFC1C2',
        },
        'secondary': {
          1: '#FB744A',
          2: '#FB8B68',
          3: '#FFBCA7',
        },
        'alter': {
          1: '#10AE59',
          2: '#55D18E',
        },
        'errors': {
          1: '#F25353',
          2: '#FF9191',
        },
        'warning': {
          1: '#FACC58',
          2: '#FFE091',
        },
        'additional': {
          1: '#363E40',
          2: '#666E70',
          3: '#A9AFB0',
          4: '#D5D8D9',
          5:'#FAFBFB'
        },
        'background':'#F4F5F5'
      },
      fontFamily: {
        shabnam: ['shabnam'],
        shabnamBold: ['shabnam-Bold'],
        shabnamLight: ['shabnam-light'],
        shabnamMedium: ['shabnam-medium'],
        shabnamThin: ['shabnam-thin']
      },
    },
  },
  plugins: [],
}
