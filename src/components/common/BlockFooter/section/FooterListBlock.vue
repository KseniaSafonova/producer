<template>
  <div class="block-footer__listBlock">
    <ul class="block-footer__list" >
      <div class="block-footer__listHeader">Gleb Petrov</div>
        <li v-for="(nav, index) in navList" :key="index" class="footer-list-block__list-item">
          <RouterLink v-if="nav.link" :to="nav.link" class="footer-list-block__link">
            {{ nav.text }}
          </RouterLink>
        <a v-if="nav.href" :href="nav.href" class="footer-list-block__link">
          {{ nav.text }}
        </a>
      </li>
    </ul>
    <ul class="block-footer__list">
      <div class="block-footer__listHeader">Услуги</div>
        <li v-for="(service, index) in servicesList" :key="index" class="footer-list-block__list-item">
          <RouterLink v-if="service.link" :to="service.link" class="footer-list-block__link">
            {{ service.text }}
          </RouterLink>
        <a v-if="service.href" :href="service.href" class="footer-list-block__link">
          {{ service.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

import { computed } from 'vue';

export default {
  setup() {
    const navList = computed(() => {
      return [
        { text: 'Главная', link: { name: 'PageLanding', hash: '#main' } },
        { text: 'Обо мне', link: { name: 'PageLanding', hash: '#about' } },
        { text: 'Связаться со мной', link: { name: 'PageLanding', hash: '#contacts' } },
      ];
    });

    const servicesList = computed(() => {
      return [
        { text: 'Список услуг', link: { name: 'PageLanding', hash: '#services' } },
        {
          text: 'Портфолио',
          href: 'https://docs.google.com/presentation/d/19Qhdi8mnNJEgEIKN8O-7NqRhBYQnq1Cd-QV_YvZkKtQ/edit?usp=sharing',
        },
      ];
    });

    return {
      navList,
      servicesList,
    };
  },
};

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

.footer-list-block__link {
  text-decoration: none;
  font-size: var(--size-text-2xs);
  color: var(--color-gray);
  transition: color 0.6s;
}

.footer-list-block__link:hover {
  color: var(--color-white);
}

.block-footer__list {
  list-style-type: none;
  width: 260px;
  font-family: var(--font-mono);
   
  @media (max-width: 768px) {
    margin-top: 40px;
  }
}

.footer-list-block__list-item {
  @media (max-width: 768px) {
    margin-top: 10px;
  }
}

</style>