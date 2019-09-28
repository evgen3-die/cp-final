import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'

import accessData from './accessData'

function authorizationInterceptor (config) {
  const { token } = accessData.get()

  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }

  return config
}

const instance = axios.create()
instance.interceptors.request.use(authorizationInterceptor, Promise.reject)

loadProgressBar({
  showSpinner: false
}, instance)

export default instance
