import WiButton from './button.vue'

WiButton.install = function (Vue) {
  Vue.component(WiButton.name, WiButton)
}

export default WiButton
