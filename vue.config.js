module.exports = {
    devServer: {
      open: true,
      host: "localhost",
      port: 8080,
      proxy: {
          '/feiyan': {
              target: 'https://iflow-api.uc.cn',
              changeOrigin: true,
          }
      }
  
    },
    publicPath: './'
  }
  