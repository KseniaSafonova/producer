<template>
  <RouterLink :to="{ name: 'PageLanding', hash: '#main' }" @click="scrollToTop()">
    <img src="./assets/logo.png" class="base-logo" alt="logo"/>
  </RouterLink>
</template>

<script>
export default {
  name: 'BaseLogo',

  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style lang="postcss">
.base-logo {
  height: 69px;
  object-fit: contain;
  display: block;
  cursor: pointer;
  max-width: 100%;

  @media (max-width: $sizeMobile) {
    height: 40px;
  }
}
</style>
