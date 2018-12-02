<template>
  <div class="error-container d-flex justify-content-center align-items-center flex-column">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .error-container {
    width: 100vw;
    height: 100vh;
  }
</style>
