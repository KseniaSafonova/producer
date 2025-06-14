<template>
  <RouterLink :to="{ name: 'PageLanding', hash: '#main' }" @click="scrollToTop()" class="base-logo">
    <span>Gleb Petrov</span>
    <SvgIcon name="wheel" class="base-logo__icon" :icon-size="10" />
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
  font-family: var(--font-flex);
  text-transform: uppercase;
  margin-right: auto;
  font-size: var(--size-text-4xl);
  line-height: 48px;
  font-weight: 500;
  position: relative;
  text-decoration: none;
  text-wrap: nowrap;

  @media (max-width: $sizeMobile) {
    font-size: var(--size-text-2xl);
  }

  @media (max-width: 388px) {
    font-size: var(--size-text-xs);
    line-height: 24px;
  }
}

.base-logo__icon {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(105%, -10%);
}
</style>
