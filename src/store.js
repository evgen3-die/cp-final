import Vue from 'vue'
import Vuex from 'vuex'
import { token } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    updateLoginStatus (state) {
      state.isLogin = !!token.get()
    }
  },
  actions: {
    async init ({ commit }) {
      commit('updateLoginStatus')
    }
  }
})
