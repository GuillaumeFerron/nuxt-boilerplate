<template>
  <transition :name="transition">
    <div v-if="showModal || showModalExt" class="modal-container d-flex justify-content-center align-items-center">
      <div :style="{ backgroundColor: darkBg ? 'rgba(0, 0, 0, 0.8)' : 'rgba(128, 128, 128, 0.3)' }" class="modal-overlay" @click="closeModal()"/>
      <div class="modal-slot">
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalContainer',
  props: {
    darkBg: {
      type: Boolean,
      default: () => false
    },
    shouldOpenAuto: {
      type: Boolean,
      default: () => true
    },
    openTimeout: {
      type: Number,
      default: () => 3000
    },
    transition: {
      type: String,
      default: () => 'fade'
    },
    hiddenOnRoutes: {
      type: Array,
      default: () => []
    },
    shouldShowOnPageChange: {
      type: Boolean,
      default: () => false
    },
    showModalExt: {
      type: Boolean,
      default: () => false
    },
    closeModalExt: {
      type: Function,
      default: () => () => {}
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  watch: {
    $route(newValue, oldValue) {
      if (this.shouldShowOnPageChange) {
        this.showWithTimeout()
      }
    }
  },
  mounted() {
    if (this.shouldOpenAuto) this.showWithTimeout()
  },
  methods: {
    showWithTimeout() {
      if (!(this.hiddenOnRoutes.length > 0 && this.hiddenOnRoutes.indexOf(this.$route.path) !== -1)) {
        setTimeout(() => {
          this.showModal = true
        }, this.openTimeout)
      }
    },
    closeModal() {
      this.showModal = false
      this.closeModalExt()
    }
  }
}
</script>

<style scoped>
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
  }

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 101;
  }

  .modal-slot {
    z-index: 102;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
