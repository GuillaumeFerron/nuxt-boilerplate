/**
 * This file triggers action on first website load
 */

window.onNuxtReady((app) => {
  // INIT VUEX
  app.$store.dispatch('init')

  // BUILD THE INTERCEPTORS
  app.$axios.onRequest((config) => {
    startAjaxLoader(config)
    return config
  })

  app.$axios.onResponse((response) => {
    successfulAjaxRequest(response)
    return response
  })

  app.$axios.onError((err) => {
    errorAjaxRequest(err)
    return Promise.reject(err)
  })

  function startAjaxLoader(config) {
    if (config.method === 'get') {
      app.$store.commit('ajax/SET_LOADER_MESSAGE', 'Please wait while we\'re retrieving your information.')
    } else if (config.method === 'post') {
      app.$store.commit('ajax/SET_LOADER_MESSAGE', 'Please wait while we\'re sending your information.')
    }

    app.$store.commit('ajax/ADD_REQUEST', config.url, config.method)
  }

  function successfulAjaxRequest(response) {
    setTimeout(() => {
      app.$store.commit('ajax/POP_REQUEST', response.config.url, response.config.method)
    }, app.$store.state.ajax.loaderDefaultTimeout)
  }

  function errorAjaxRequest(err) {
    console.log(err)
    // TODO find a way to remove the error request from the ajaxQueue
    app.$store.commit('ajax/POP_REQUEST')
  }
})
