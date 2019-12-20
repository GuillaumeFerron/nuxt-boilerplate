export default function(context) {
  if (context.store.state.base.cachedRoutes.indexOf(context.route.path) === -1) {
    context.store.commit('base/SITE_LOADING', context.store.state.base.defaultLoaderTimeout)
    context.store.commit('base/UPDATE_CACHED_ROUTES', context.route.path)
  }
}
