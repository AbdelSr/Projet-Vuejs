import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Info from './components/info/info.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
      props: true
    }
  ]
})
