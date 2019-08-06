/* eslint import/no-extraneous-dependencies : 0 */
export const state = () => ({
  loaded: false,
  cachedRoutes: [],
  screenSize: false
})

export const getters = {
  loaded: state => state.loaded,
  isMobile: state => state.isMobile,
  cachedRoutes: state => state.cachedRoutes
}

export const mutations = {
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
  },
  /**
   * Update the screenSize store data
   *
   * @param state
   * @param value
   * @constructor
   */
  SET_SCREEN_SIZE(state, value) {
    state.screenSize = value
  }
}
export const actions = {
  /**
   * Actions to be done on first website load
   *
   * @param state
   * @param commit
   */
  init({ state, commit }) {
    commit('SET_SCREEN_SIZE', $(window).width() < 768 ? 'xs' : $(window).width() < 992 ? 'sm' : $(window).width() < 1200 ? 'md' : 'lg')

    window.addEventListener('resize', () => {
      console.log('rest')
      commit('SET_SCREEN_SIZE', $(window).width() < 768 ? 'xs' : $(window).width() < 992 ? 'sm' : $(window).width() < 1200 ? 'md' : 'lg')
    })
  }
}
