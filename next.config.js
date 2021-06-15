const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra()

module.exports = {
  assetPrefix: './',
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
}
