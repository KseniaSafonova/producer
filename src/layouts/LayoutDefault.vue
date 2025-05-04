<template>
  <div>
    <!-- header -->
    <BlockHeader />

    <!-- main -->
    <RouterView />

    <!-- footer -->
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
}
</script>
