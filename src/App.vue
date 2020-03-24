<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: 'App',
  data () {
    return {
      res: {}
    }
  }, mounted () {
    /**
     * 
     * 测试本地存储
    */
    // storage.setItem("aa", 1)
    //  storage.setItem('user', {
    //    'a':'1',
    //    'b':'222'
    //  })
    //  storage.setItem('abc', {
    //    'a':'1',
    //    'b':'222'
    //  },'user')

    /**
     * 本地加载请求静态js文件的形式
     * */
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })

    /**
     * 通过 easy-mock 平台实现数据 mock
    */
    // this.axios.get('/user/login').then((res) => {
    // this.res = res
    //  })

    /**
     * 本地集成mock.js实现数据mock
    */
  //  this.axios.get('user/login').then((res)=>{
  //    console.log(123)
  //    this.res = res
  //    console.log(this.res)
  //  })

  }
}
</script>

<style>
</style>
