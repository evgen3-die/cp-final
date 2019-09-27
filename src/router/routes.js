import { Home, Cabinet, Login, Resume, NotFound } from '@/views'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/cabinet',
    component: Cabinet,
    meta: {
      isOpenWithLogin: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isOpenWithoutLogin: true
    }
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
