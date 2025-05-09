<script>
import {ref} from 'vue';

export default {
  name: 'FooterListBlock',
  setup() {
    const conditions = ref([
      { text: 'Условия использования' },
      { text: 'Политика конфиденциальности' },
    ]);

    const main = ref([
      {text: 'Главная'}, 
      {text: 'Обо мне'}, 
      {text: 'Связаться со мной'}
    ]);

    const services = ref([
      {text: 'Список услуг'}, 
      {text: 'Портфолио'}
    ]);

    return { conditions, main, services };
  }
}

</script>

<template>
    <ul>
      <div>Условия и политика</div>
        <li v-for="condition in conditions">
        <a href="">{{ condition.text }}</a>  
        </li>
    </ul>
    <ul>
      <div>Gleb Petrov</div>
        <li v-for="item in main">
          <a href="">{{ item.text }}</a>
        </li>
    </ul>
    <ul>
      <div>Услуги</div>
        <li v-for="service in services">
          <a href="">{{ service.text }}</a>
        </li>
    </ul>
   
</template>

<style lang="postcss">
a {
text-decoration: none;
}

ul {
  list-style-type: none;
  color: var(--color-gray);
}

div {
  color: var( --color-gray-30);
}
</style>