/* eslint import/no-extraneous-dependencies : 0 */

import Vuex from 'vuex'

/* Modules */

const createStore = () => new Vuex.Store({
  state: () => ({
    loaded: false,
    isMobile: false,
    cachedRoutes: []
  }),
  getters: {
    loaded: state => state.loaded,
    isMobile: state => state.isMobile,
    cachedRoutes: state => state.cachedRoutes
  },
  mutations: {
    /**
     * The website has been loaded once
     *
     * @param state
     * @constructor
     */
    SITE_LOADED(state) {
      state.loaded = true
    },

    /**
     * Update the isMobile store data
     *
     * @param state
     * @param value
     * @constructor
     */
    CHANGE_MOBILE(state, value) {
      state.isMobile = value
    },

    /**
     * Update the cached routes array
     *
     * @param state
     * @param route
     * @constructor
     */
    UPDATE_CACHED_ROUTES(state, route) {
      state.cachedRoutes.push(route)
    },

    /**
     * Resets the cached routes array
     *
     * @param state
     * @constructor
     */
    RESET_CACHED_ROUTES(state) {
      state.cachedRoutes = [].slice(0)
    }
  },
  actions: {
    /**
     * Actions to be done on first website load
     *
     * @param state
     * @param commit
     */
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
