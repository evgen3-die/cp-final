const KEY = 'accessToken'

export default {
  get () {
    return localStorage.getItem(KEY)
  },
  set (token) {
    localStorage.setItem(KEY, token)
  },
  remove () {
    localStorage.removeItem(KEY)
  }
}
