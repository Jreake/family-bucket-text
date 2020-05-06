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
    }
  },
  mounted () {
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser () {
      this.axios.get('/user').then((res) => {
        // to-do 保存到VueX中
        this.$store.dispatch('saveUserName',res.username);

      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res) => {
        // to-do 保存到VueX中
          this.$store.dispatch('saveCartCount',res);

      })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
</style>
