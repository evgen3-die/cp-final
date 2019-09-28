import Vue from 'vue'
import Vuex from 'vuex'

import { accessData } from '@/utils'
import { fetchLogin } from '@/services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    role: ''
  },
  mutations: {
    updateLoginStatus (state) {
      state.isLogin = !!accessData.get().token
    },
    updateRole (state) {
      state.role = accessData.get().role || ''
    }
  },
  actions: {
    async init ({ dispatch }) {
      await dispatch('updateAccessStatus')
    },
    async login ({ dispatch }, { email, password, role }) {
      const token = await fetchLogin(email, password)
      accessData.set({ token, role })
      await dispatch('updateAccessStatus')
    },
    async logout ({ dispatch }) {
      accessData.remove()
      await dispatch('updateAccessStatus')
    },
    async updateAccessStatus ({ commit }) {
      commit('updateLoginStatus')
      commit('updateRole')
    }
  }
})
