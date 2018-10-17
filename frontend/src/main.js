// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import RisingComponents from './components/rising-components'
import Ripple from 'vue-ripple-directive'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.prototype.$http = axios
// Vue.use(RisingComponents)
Vue.component('rising-button', require('./components/rising-components/rising-button.vue').default)
Vue.component('rising-textbox', require('./components/rising-components/rising-textbox.vue').default)
Vue.component('rising-card', require('./components/rising-components/rising-card.vue').default)
Vue.component('rising-chat', require('./components/rising-components/rising-chat.vue').default)

Ripple.color = 'rgba(255, 255, 255, 0.25)'
Vue.directive('ripple', Ripple)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
