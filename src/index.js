import Alert from './components/alert'
import Badge from './components/badge'
import Breadcrumb from './components/breadcrumb'
import BreadcrumbItem from './components/breadcrumb-item'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Col from './components/col'
import Divider from './components/divider'
import Dropdown from './components/dropdown'
import DropdownItem from './components/dropdown-item'
import Menu from './components/menu'
import MenuItem from './components/menu-item'
import Nav from './components/nav'
import NavItem from './components/nav-item'
import Panel from './components/panel'
import Row from './components/row'
import Submenu from './components/submenu'
import Title from './components/title'

const components = [
  Alert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Col,
  Divider,
  Dropdown,
  DropdownItem,
  Menu,
  MenuItem,
  Nav,
  NavItem,
  Panel,
  Row,
  Submenu,
  Title
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
  Alert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Col,
  Divider,
  Dropdown,
  DropdownItem,
  Menu,
  MenuItem,
  Nav,
  NavItem,
  Panel,
  Row,
  Submenu,
  Title
}

module.exports.default = module.exports = API
