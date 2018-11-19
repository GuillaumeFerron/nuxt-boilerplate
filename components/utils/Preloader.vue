<template>
  <div v-if="loading" class="loading-page">Loading</div>
</template>

<script>
export default {
  name: 'Preloader',
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>
