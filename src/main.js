import Vue from 'vue'
import router from './router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store/index'
import App from './App.vue'
// import ENV from './env/env'

const mock = false;
if (mock) {
  require('./mock/api');
}

//根据前端的跨域方式做调整
//更具环境变量获取不同的url地址
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;


//接口错误拦截
axios.interceptors.response.use((response) => {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = '/#/login'
    }
  } else {
    alert(res.msg);
    return Promise.reject(res);
  }
})

// axios.interceptors.request.use({})

Vue.use(VueAxios, axios) //加载插件
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false //生产环境的提示 默认关闭

new Vue({
  store,
  router, //当 key 值和 value 一样的时候就可以省略 value 值
  render: h => h(App),
}).$mount('#app')