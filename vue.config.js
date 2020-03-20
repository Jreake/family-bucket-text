module.exports = {
  devServer: {
    host: 'localhost', //主机
    port: 8080, //端口号，可以指定 
    proxy: { //代理
      '/api': {    //当接口访问到 /api 的时候将会自动代理到 target 的地址里面
        target: 'https://www.imooc.com', //代理的目标
        changeOrigin: true ,//是否将主机头的原点更改为目标的url地址
        pathRewrite:{    //代理地址
            '/api':''    //当拦截到 api 的时候，会将 api 制空
        }
      }
    }
  }
}