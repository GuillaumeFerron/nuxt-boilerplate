export default {
  state: () => ({
    triggers: [],
    enabled: false
  }),
  getters: {
    /**
     * Accepts the element and offset as parameters and returns true if el is in viewport
     *
     * @param elem
     * @param yOffset
     * @constructor
     */
    isInViewport: state => (elem, yOffset = 0) => {
      const bounding = elem.getBoundingClientRect()
      return (
        (
          bounding.top >= 0 &&
          bounding.top <= ((window.innerHeight || document.documentElement.clientHeight) - yOffset)
        ) ||
        (
          bounding.bottom >= yOffset &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        )
      )
    }
  },
  mutations: {
    /**
     * Updates the triggers / sections
     *
     * @param state
     * @param value
     * @constructor
     */
    TRIGGERS(state, value) {
      state.triggers = value
    },

    /**
     * Flags if scroll triggers has been enabled
     *
     * @param state
     * @param value
     * @constructor
     */
    ENABLED(state, value) {
      state.enabled = value
    }
  },
  actions: {
    /**
     * Start listening to scroll event ONLY ONCE
     *
     * @param state
     * @param commit
     * @param dispatch
     * @constructor
     */
    bindWindowScroll({ state, commit, dispatch }) {
      if (!state.enabled) {
        window.addEventListener('scroll', () => { dispatch('handleScroll') })
        commit('ENABLED', true)
      }
    },

    /**
     * Adds a transition-in class when trigger enters viewport
     *
     * @param state
     * @param getters
     * @constructor
     */
    handleScroll({ state, getters }) {
      state.triggers.forEach((el) => {
        const $el = $(el)
        const offset = Number($el.data('scroll-offset')) || 0

        if (getters.isInViewport(el, offset)) {
          $el.addClass('transition-in')
        }
      })
    }
  }
}
