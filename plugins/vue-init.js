/**
 * This file triggers action on first website load
 */

window.onNuxtReady((app) => {
  app.$store.dispatch('init')
})
