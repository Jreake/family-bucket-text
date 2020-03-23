<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter'
import OrderHeader from '../components/OrderHeader'


export default {
  name: 'order',
  components: {
    NavFooter,
    OrderHeader
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
</style>
