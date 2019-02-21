<template>
  <div
    class="maintenance-container d-flex justify-content-center align-items-center flex-column">
    <h1>This website is under construction.</h1>
    <div class="maintenance-icon"><i class="fa fa-hard-hat"/></div>
  </div>
</template>

<script>
export default {
  name: 'Maintenance',
  mounted() {
    this.$store.commit('SITE_LOADED')
  }
}
</script>

<style lang="scss" scoped>
  .maintenance-container {
    width: 100vw;
    height: 100vh;

    .maintenance-icon {
      font-size: 7vw;
      color: #EED202;
    }
  }
</style>
