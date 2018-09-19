import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import vwi from '../src'
import '../src/scss/main.scss'
import './assets/css/main.scss'

Vue.config.productionTip = false

Vue.use(vwi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
