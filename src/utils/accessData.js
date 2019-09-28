const KEY = 'accessData'
const SEPARATOR = ','

export default {
  get () {
    const [token, role] = (localStorage.getItem(KEY) || '').split(SEPARATOR)
    return { token, role }
  },
  set ({ token, role }) {
    localStorage.setItem(KEY, [token, role].join(SEPARATOR))
  },
  remove () {
    localStorage.removeItem(KEY)
  }
}
