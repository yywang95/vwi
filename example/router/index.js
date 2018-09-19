import Vue from 'vue'
import Router from 'vue-router'
const PageHome = () => import('@/views/home')
const PageBuild = () => import('@/views/build')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    }, {
      path: '/build',
      name: 'PageBuild',
      component: PageBuild
    }
  ]
})
