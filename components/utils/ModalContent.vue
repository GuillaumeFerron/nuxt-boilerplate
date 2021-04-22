<template>
  <div class="modal-content p-3 d-flex justify-content-center align-items-center">
    <div class="modal-inside w-100 bg-white text-center p-2 p-md-4 p-md-5 position-relative">
      <div class="close-modal clickable" @click="$parent.closeModal()">&#10005;</div>
      <div>Example Content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalContent',
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .modal-content {
    width: 575px;
    height: 525px;
    max-width: calc(100vw - 20px);
    max-height: calc(575 / 525 *  (100vw - 20px));
    background-size: cover;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;

    @include media-breakpoint-down('sm') {
      height: auto;
    }
  }

  .first-line {
    font-size: 35px;
    letter-spacing: 5px;
    line-height: 1.17;

    @include media-breakpoint-down('sm') {
      font-size: 16px;
    }
  }

  .second-line {
    line-height: 1;
    font-size: 80px;
    font-family: 'DomaineTextWeb-Black', 'AvenirLTStd-Black', serif;

    @include media-breakpoint-down('sm') {
      font-size: 40px;
    }
  }

  .third-line {
    font-size: 14px;

    @include media-breakpoint-down('sm') {
      font-size: 11px;
      margin-top: 0;
    }
  }

  .form-section {
    min-height: 135px;
  }

  .centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkout-name, .checkout-email {
    border-radius: 0;
    border-color: #9e9e9c;
    padding-top: 10px;

    @include media-breakpoint-down('sm') {
      border-top: 0;
      border-left: 0;
      border-right: 0;
    }

    &:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(247, 140, 125, 0.3) !important;
      -moz-box-shadow: 0 0 0 0.2rem rgba(247, 140, 125, 0.3) !important;
      box-shadow: 0 0 0 0.2rem rgba(247, 140, 125, 0.3) !important;
      border-color: $color-geraldine;

      @include media-breakpoint-down('xs') {
        -webkit-box-shadow: 0 0 0 -0.2rem rgba(247, 140, 125, 0.3) !important;
        -moz-box-shadow: 0 0 0 -0.2rem rgba(247, 140, 125, 0.3) !important;
        box-shadow: 0 0 0 -0.2rem rgba(247, 140, 125, 0.3) !important;
      }
    }
    &:hover {
      background-color: white !important;
      border-color: $color-geraldine !important;
      color: $color-geraldine !important;
    }
  }

  .checkout-name::placeholder, .checkout-email::placeholder {
    color: #bfbfbf;
  }

  .btn-login {
    border-radius: 50px;
    width: 158px;
    font-size: 13px;

    @include media-breakpoint-down('sm') {
      width: 100%;
    }
  }

  .close-modal {
    color: #121010;
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 20px;

    @include media-breakpoint-down('sm') {
      top: 5px;
      right: 10px;
    }
  }

  .success-message {
    font-size: 25px;

    @include media-breakpoint-down('sm') {
      font-size: 16px;
    }
  }

  @include media-breakpoint-down('sm') {
    .form-group {
      margin-bottom: 0;
    }
  }
</style>
