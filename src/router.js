import Vue from 'vue'
import Router from 'vue-router'
import { Home, Cabinet, Login, Resume, NotFound } from './views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cabinet',
      component: Cabinet
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/resume/:id',
      component: Resume
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
