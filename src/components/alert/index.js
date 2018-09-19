import WiAlert from './alert.vue'

WiAlert.install = function (Vue) {
  Vue.component(WiAlert.name, WiAlert)
}

export default WiAlert
