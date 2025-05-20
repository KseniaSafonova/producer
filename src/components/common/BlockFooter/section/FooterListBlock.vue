<template>
  <div class="block-footer__listBlock">
    <ul class="block-footer__list" >
      <div class="block-footer__listHeader">Gleb Petrov</div>
        <li class="block-footer__listItem" v-for="(item, index) in main" :key="index">
          <a class="block-footer__link" href="">{{ item.text }}</a>
        </li>
    </ul>
    <ul class="block-footer__list">
      <div class="block-footer__listHeader">Услуги</div>
        <li class="block-footer__listItem" v-for="(service, index) in services" :key="index">
          <a class="block-footer__link" href="">{{ service.text }}</a>
        </li>
    </ul>
  </div>
</template>

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

<style lang="postcss">

.block-footer__listBlock {
  display: flex;

  @media (max-width: 768px) {
    display: block;
    margin-top: -130px;
    margin-left: 15px;
  }
}

.block-footer__listHeader {
  color: var(--color-white);
  height: 44px;
  font-weight: 500;
  font-size: var(--size-text-m);
  font-family: var(--font-flex);
  letter-spacing: 0.2em;
}

.block-footer__link {
  text-decoration: none;
  font-size: var(--size-text-2xs);
}

.block-footer__link:hover {
  color: var(--color-white);
}

.block-footer__list {
  list-style-type: none;
  color: var(--color-gray);
  width: 260px;
  font-family: var(--font-mono);
   
  @media (max-width: 768px) {
    margin-top: 40px;
  }
}

.block-footer__listItem {
  @media (max-width: 768px) {
    margin-top: 10px;
  }
}

</style>