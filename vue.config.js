const MAIN_STYLE_PATH = '~@/styles/main.scss'

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "${MAIN_STYLE_PATH}";`
      }
    }
  }
}
