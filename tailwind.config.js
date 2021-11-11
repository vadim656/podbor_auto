module.exports = {
  purge: {
    content: [
      './public/**/*.html',
      './src/components/*.{html,js,vue}',
      './src/App.vue',
      './src/index.css',
    ],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
  mode: 'jit',
}
