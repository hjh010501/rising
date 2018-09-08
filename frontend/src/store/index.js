import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const enhanceAccessToeken = () => {
  const {accessToken} = localStorage
  if (!accessToken) return
  axios.defaults.headers.common['x-access-token'] = accessToken
}

enhanceAccessToeken()

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {
    isAuthenticated (state) {
      state.accessToken = state.accessToken || localStorage.accessToken
      return state.accessToken
    }
  },
  mutations: {
    LOGIN (state, accessToken) {
      state.accessToken = accessToken
      localStorage.accessToken = accessToken
    },
    LOGOUT (state) {
      state.accessToken = null
      delete localStorage.accessToken
    }
  },
  actions: {
    LOGIN ({commit}, {id, password}) {
      axios.post('/api/auth/login', {
        id: id,
        password: password
      })
        .then(data => {
          axios.defaults.headers.common['x-access-token'] = data.data.token
          console.log(data.data.token)
          commit('LOGIN', data.data.token)
        })
    },
    LOGOUT ({commit}) {
      axios.defaults.headers.common['x-access-token'] = undefined
      commit('LOGOUT')
    }
  }
})
