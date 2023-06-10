module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'tailwindcss/nesting': {},
    'postcss-custom-properties-fallback': {
      importFrom: require.resolve('react-spring-bottom-sheet/defaults.json'),
    },
    'postcss-nesting': {},
  },
}
