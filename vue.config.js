module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'network' : '@/network',
        'views': '@/views',
        'components': '@/components',
        'router': '@/router',
        'store' : '@/store',
        'assets': '@/assets'
      }
    }
  }
}