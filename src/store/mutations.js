/*
  商城Vuex-actions  传输
*/
export default {
  saveUserName(state, username) {
    state.username = username;
  },
  saveCartCount(state, count) {
    state.cartCount = count;
  }
}