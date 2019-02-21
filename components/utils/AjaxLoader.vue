<template>
  <transition name="page">
    <div v-if="ajaxLoading" class="loading-page">
      <div class="loader">
        <svg class="circular mb-5" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
      </div>
      <div class="mt-5 loader-message">{{ ajaxLoaderMessage }}</div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AjaxLoader',
  computed: {
    ...mapGetters({
      ajaxLoading: 'ajax/ajaxLoading',
      ajaxLoaderMessage: 'ajax/ajaxLoaderMessage'
    })
  }
}
</script>

<style lang="scss" scoped>
  .loading-page {
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;

    .loader-message {
      position: absolute;
      top: 50%;
      left: 50%;
      @include transform(translate(-50%, -50%));
    }
  }

  .loader {
    position: relative;
    width: 100px;
    top: 50%;
    left: 50%;
    @include transform(translate(-50%, -50%));

    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }

  .circular {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes color {
    100%,
    0% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%,
    90% {
      stroke: #ffa700;
    }
  }
</style>
