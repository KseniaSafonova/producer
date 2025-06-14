<template>
  <div class="layout-default" :class="{ 'layout-default_drawer': isMenuOpen }">
    <!-- header -->
    <BlockHeader />

    <!-- main -->
    <main class="layout-default__main">
      <RouterView />
    </main>
    <BlockFooter id="footer" />
  </div>
</template>

<script>
import { useMenuStore } from '@/store/menuStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'LayoutDefault',

  setup() {
    const menuStore = useMenuStore()

    const { isMenuOpen } = storeToRefs(menuStore)

    return { isMenuOpen }
  },

  watch: {
    isMenuOpen(isOpen) {
      document.body.style.overflow = isOpen ? 'hidden' : ''
    },
  },
}
</script>

<style lang="postcss">
.layout-default {
  position: relative;
}

.layout-default_drawer::after {
  content: '';
  position: fixed;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  background-color: var(--color-black);
  z-index: 10;
}

.layout-default__main {
  margin-top: 60px;
}
</style>
