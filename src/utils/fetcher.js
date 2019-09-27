import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'

import token from './token'

function authorizationInterceptor (config) {
  if (token.get()) {
    config.headers.authorization = `Bearer ${token.get()}`
  }

  return config
}

const instance = axios.create()
instance.interceptors.request.use(authorizationInterceptor, Promise.reject)

loadProgressBar({
  showSpinner: false
}, instance)

export default instance
