<template>
  <div>
    <!-- header -->
    <BlockHeader />

    <!-- main -->
    <RouterView />

    <!-- footer -->  
     
    <footer><Footer /></footer>
  </div>
</template>

<script>

export default {
  name: 'LayoutDefault',
}
</script>
