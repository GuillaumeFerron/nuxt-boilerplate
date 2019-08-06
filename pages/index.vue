<template>
  <section class="container">
    <h1 class="seo-title">{{ title }}</h1>
    <div>
      <logo/>
      <h1 class="title">{{ pkg.name }}</h1>
      <h2 class="subtitle">A CandyLab product.</h2>
      <div class="links">
        <a
          href="https://candydigital.co"
          target="_blank"
          class="button--green">Candy Digital</a>
        <a
          href="https://github.com/GuillaumeFerron/nuxt-boilerplate"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/utils/Logo.vue'
const pkg = require('../package')

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A boilerplate for Nuxt projects. It includes Bootstrap | SCSS | JQuery.'
        }
      ]
    }
  },
  data() {
    return {
      title: 'Index',
      pkg: pkg
    }
  },
  asyncData() {
    // TODO: cache-management middleware handles the preloader, but good practice and to be used in the future

    // return new Promise((resolve) => {
    //   setTimeout(function() {
    //     resolve({})
    //   }, 1000)
    // })
  },
  mounted() {
    this.$store.commit('base/SITE_LOADED')
  }
}
</script>

<style>

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
