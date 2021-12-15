module.exports = {
  purge: {
    content: [
      './public/**/*.html',
      './src/components/*.{html,js,vue}',
      './src/components/UI/*.{html,js,vue}',
      './src/views/*.{html,js,vue}',
      './src/App.vue',
      './src/index.css',
      './node_modules/tippy.js/dist/tippy.css'
    ],
    options: {
      keyframes: true
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: ['hover', 'focus']
    }
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus']
    },
    grayscale: ['hover', 'focus'],
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
  mode: 'jit'
}
