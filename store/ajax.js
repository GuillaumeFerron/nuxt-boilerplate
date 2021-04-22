export const state = () => ({
  ajaxQueue: [],
  ajaxLoaderMessage: '',
  loaderDefaultTimeout: 500
})

export const getters = {
  ajaxQueue: state => state.ajaxQueue,
  ajaxLoading: state => state.ajaxQueue.length > 0,
  ajaxLoaderMessage: state => state.ajaxLoaderMessage,
  loaderDefaultTimeout: state => state.loaderDefaultTimeout
}

export const mutations = {
  /**
   * Add an element in the ajax queue given a url and a method
   *
   * @param state
   * @param url
   * @param method
   * @constructor
   */
  ADD_REQUEST(state, url, method) {
    state.ajaxQueue.push(`${url}_${method}`)
  },
  /**
   * Removes a given url and method from the ajax queue.
   * If the parameters are not given, pop the last element in the queue
   *
   * @param state
   * @param url
   * @param method
   * @constructor
   */
  POP_REQUEST(state, url = null, method = null) {
    const index = state.ajaxQueue.indexOf(`${url}_${method}`)

    url && method && index !== -1
      ? state.ajaxQueue.splice(index, 1)
      : state.ajaxQueue.pop()
  },
  /**
   * Removes a given url and method from the ajax queue.
   * If the parameters are not given, pop the first element in the queue
   *
   * @param state
   * @param url
   * @param method
   * @constructor
   */
  SHIFT_REQUEST(state, url = null, method = null) {
    const index = state.ajaxQueue.indexOf(`${url}_${method}`)

    url && method && index !== -1
      ? state.ajaxQueue.splice(index, 1)
      : state.ajaxQueue.pop()
  },
  /**
   * Sets the loader message
   *
   * @param state
   * @param message
   * @constructor
   */
  SET_LOADER_MESSAGE(state, message = 'Please wait...') {
    state.ajaxLoaderMessage = message
  }
}
