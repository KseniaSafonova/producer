<script>
import {ref} from 'vue';

export default {
  name: 'FooterListBlock',
  setup() {
    const conditions = ref([
      { text: 'Условия использования' },
      { text: 'Политика конфиденциальности' },
    ]);

    return { conditions };
  }
}

</script>

<template>
    <ul>
        <li v-for="condition in conditions">
          {{ condition.text }}
        </li>
    </ul>
    <!--<ul>
        <li><a href="/...">...</a></li>
    </ul>
    <ul>
        <li><a href="/...">...</a></li>
    </ul>-->
</template>



<style lang="postcss">

</style>