<template>
  <div class="layout-default" :class="{ 'layout-default_drawer': isMenuOpen }">
    <!-- header -->
    <BlockHeader />

    <!-- main -->
    <main>
      <RouterView />
    </main>

    <!-- footer -->  
     
    <footer><Footer /></footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',

  setup() {
    const menuStore = useMenuStore()

    const { isMenuOpen } = storeToRefs(menuStore)

    return { isMenuOpen }
  },
}
</script>

<style lang="postcss">
.layout-default {
  position: relative;
}

.layout-default.layout-default_drawer {
  overflow: hidden;
  height: 100vh;
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
</style>
