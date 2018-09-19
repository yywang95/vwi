import WiNav from './nav.vue'

WiNav.install = function (Vue) {
  Vue.component(WiNav.name, WiNav)
}

export default WiNav
