import Alert from './components/alert'

const components = [
  Alert
]

const install = function (Vue, options = {}) {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version: '0.0.1',
  install,
  Alert
}

module.exports.default = module.exports = API
