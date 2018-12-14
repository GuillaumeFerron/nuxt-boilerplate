export default function(context) {
  if (context.store.state.cachedRoutes.indexOf(context.route.path) === -1) {
    context.store.commit('UPDATE_CACHED_ROUTES', context.route.path)
  }
}
