import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false

new Vue({
  router, //当 key 值和 value 一样的时候就可以省略 value 值
  render: h => h(App),
}).$mount('#app')