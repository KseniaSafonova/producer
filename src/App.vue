<template>
  <RouterView />
</template>

<script>
import { onMounted } from 'vue'
import { useDeviceStore } from './store/deviceStore'

export default {
  name: 'App',

  setup() {
    const deviceStore = useDeviceStore()

    onMounted(async () => {
      deviceStore.init()
    })
  },
}
</script>
