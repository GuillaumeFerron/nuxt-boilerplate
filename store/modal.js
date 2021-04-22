/* eslint import/no-extraneous-dependencies : 0 */
import Vue from 'vue'

export const state = () => ({
  modals: {}
})

export const getters = {
  modal: state => modal => state.modals[modal] || false
}

export const mutations = {
  /**
   * The website has been loaded once
   *
   * @param state
   * @param modal
   * @param value
   * @constructor
   */
  TOGGLE_MODAL(state, { modal = 'default', value = state.modals[modal] ? state.modals[modal].show : true }) {
    if (state.modals[modal]) {
      Vue.set(state.modals, modal, { ...state.modals[modal], show: value })
    } else {
      Vue.set(state.modals, modal, { show: value })
    }
  }
}
