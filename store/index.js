/* eslint import/no-extraneous-dependencies : 0 */

import Vuex from 'vuex'

// MODULES
import ajax from './ajax'

/* Modules */

const createStore = () => new Vuex.Store({
  state: () => ({
    loaded: false,
    screenSize: false,
    cachedRoutes: []
  }),
  getters: {
    loaded: state => state.loaded,
    screenSize: state => state.screenSize,
    cachedRoutes: state => state.cachedRoutes
  },
  mutations: {
    /**
     * The website has been loaded once
     *
     * @param state
     * @param value
     * @constructor
     */
    SITE_LOADED(state, value = true) {
      state.loaded = value
    },

    /**
     * Update the screen size store data
     *
     * @param state
     * @param value
     * @constructor
     */
    SET_SCREEN_SIZE(state, value) {
      state.screenSize = value
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
      // Sets the screen sizes acording to bootstrap rules
      window.addEventListener('resize', () => {
        commit('SET_SCREEN_SIZE', $(window).width() < 768 ? 'xs' : $(window).width() < 992 ? 'sm' : $(window).width() < 1200 ? 'md' : 'lg')
      })
    }
  },
  modules: {
    namespaced: true,
    ajax: ajax
  }
})

export default createStore
