export default function(context) {
  // TODO: Have a proper loading that stops when the page is loaded
  if (context.store.state.cachedRoutes.indexOf(context.route.path) === -1) {
    context.store.commit('SITE_LOADED', false)
  }
}
