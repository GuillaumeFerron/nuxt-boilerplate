/* eslint import/no-extraneous-dependencies : 0 */
export const state = () => ({
  loaded: false,
  cachedRoutes: [],
  screenSize: false,
  browser: ''
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
  },
  /**
   * Set browser
   *
   * @param state
   * @param value
   * @constructor
   */
  SET_BROWSER(state, value) {
    state.browser = value
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
      commit('SET_SCREEN_SIZE', $(window).width() < 768 ? 'xs' : $(window).width() < 992 ? 'sm' : $(window).width() < 1200 ? 'md' : 'lg')
    })

    commit('SET_BROWSER', checkBrowser())
  }
}

/**
 * Check for browser support
 */
export function checkBrowser() {
  // Opera 8.0+
  if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
    return 'opera'
  }
  // Firefox 1.0+
  if (typeof InstallTrigger !== 'undefined') {
    return 'firefox'
  }
  // Safari 3.0+ "[object HTMLElementConstructor]"
  if (/constructor/i.test(window.HTMLElement) || (function(p) {
    return p.toString() === '[object SafariRemoteNotification]'
  })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) {
    return 'safari'
  }
  // Internet Explorer 6-11
  if (/* @cc_on!@*/false || !!document.documentMode) {
    return 'ie'
  }
  // Edge 20+
  if (window.StyleMedia) {
    return 'edge'
  }
  // Chrome 1 - 71
  if (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) {
    return 'chrome'
  }
}
