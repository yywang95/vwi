import Vue from 'vue'
import Router from 'vue-router'
const PageHome = () => import('@/views/home')
const PageBuild = () => import('@/views/build')
const PageLearnCss = () => import('@/views/learnCss')
const PageLearnLayout = () => import('@/views/learnLayout')
const PageLearnButton = () => import('@/views/learnButton')

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
    }, {
      path: '/learnCss',
      name: 'PageLearnCss',
      component: PageLearnCss
    }, {
      path: '/learnLayout',
      name: 'PageLearnLayout',
      component: PageLearnLayout
    }, {
      path: '/learnButton',
      name: 'PageLearnButton',
      component: PageLearnButton
    }
  ]
})
