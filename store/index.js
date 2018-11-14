/* eslint import/no-extraneous-dependencies : 0 */

import Vuex from 'vuex'

/* Modules */

const createStore = () => new Vuex.Store({
  state: () => ({
    loaded: false
  }),
  getters: {
    loaded: state => state.loaded
  },
  mutations: {
    SITE_LOADED(state) {
      state.loaded = true
    }
  },
  modules: {
    namespaced: true
  }
})

export default createStore
