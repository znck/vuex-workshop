import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

new Vue({
  ...App,
  router,
  store,
  el: '#app'
})
