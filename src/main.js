import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons'
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Meta from 'vue-meta'

import App from './App.vue'
import router from './router'
import store from './store'
import { fetcher } from '@/utils'

window.fetcher = fetcher

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Meta)

fontAwesomeLibrary.add(faUser, faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

async function init () {
  await store.dispatch('init')

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

init()
