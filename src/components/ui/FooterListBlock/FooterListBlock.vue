<script>
import {ref} from 'vue';

export default {
  name: 'FooterListBlock',
  setup() {
       const main = ref([
      {text: 'Главная'}, 
      {text: 'Обо мне'}, 
      {text: 'Связаться со мной'}
    ]);

    const services = ref([
      {text: 'Список услуг'}, 
      {text: 'Портфолио'}
    ]);

    return { main, services };
  }
}

</script>

<template>
    <ul>
      <div class="listHeader">Gleb Petrov</div>
        <li v-for="item in main">
          <a href="">{{ item.text }}</a>
        </li>
    </ul>
    <ul>
      <div class="listHeader">Услуги</div>
        <li v-for="service in services">
          <a href="">{{ service.text }}</a>
        </li>
    </ul>
</template>

<style lang="postcss">
a {
text-decoration: none;
font-size: 15px;
}

ul {
  list-style-type: none;
  color: var(--color-gray);
  width: 271px;
  font-family: var(--font-mono);
}

.listHeader {
  color: var(--color-white);
  height: 44px;
  font-weight: 500;
  font-size: 18px;
  font-family: var(--font-flex);
}
</style>