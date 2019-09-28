import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

fontAwesomeLibrary.add(faUser)
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
