export default function(context) {
  if (context.store.state.base.cachedRoutes.indexOf(context.route.path) === -1) {
    context.store.commit('base/SITE_LOADED', false)
  }
}
