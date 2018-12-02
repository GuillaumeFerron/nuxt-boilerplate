/* eslint import/no-extraneous-dependencies : 0 */

import Vuex from 'vuex'

/* Modules */

const createStore = () => new Vuex.Store({
  state: () => ({
    loaded: false,
    isMobile: false
  }),
  getters: {
    loaded: state => state.loaded,
    isMobile: state => state.isMobile
  },
  mutations: {
    SITE_LOADED(state) {
      state.loaded = true
    },
    CHANGE_MOBILE(state, value) {
      state.isMobile = value
    }
  },
  actions: {
    init({ state, commit }) {
      window.addEventListener('resize', () => {
        commit('CHANGE_MOBILE', $(window).width() <= 768)
      })
    }
  },
  modules: {
    namespaced: true
  }
})

export default createStore
