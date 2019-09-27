import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = store.state
  const isOpenWithLogin = to.matched.some(record => record.meta.isOpenWithLogin)
  const isOpenWithoutLogin = to.matched.some(record => record.meta.isOpenWithoutLogin)

  if (isOpenWithLogin && !isLogin) {
    next('/login')
    return
  }

  if (isOpenWithoutLogin && isLogin) {
    next('/cabinet')
    return
  }

  next()
})

export default router
