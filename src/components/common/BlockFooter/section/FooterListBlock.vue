<template>
  <div class="block-footer__list-block">
    <ul class="block-footer__list">
      <p class="heading-fifthly block-footer__list-header">Условия и политика</p>

      <li v-for="(item, index) in legalList" :key="index" class="footer-list-block__list-item">
        <RouterLink :to="item.link" class="footer-list-block__link">
          {{ item.text }}
        </RouterLink>
      </li>
    </ul>

    <ul class="block-footer__list">
      <p class="heading-fifthly block-footer__list-header">Gleb Petrov</p>

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
      <p class="heading-fifthly block-footer__list-header">Услуги</p>

      <li
        v-for="(service, index) in servicesList"
        :key="index"
        class="footer-list-block__list-item"
      >
        <RouterLink v-if="service.link" :to="service.link" class="footer-list-block__link">
          {{ service.text }}
        </RouterLink>

        <a v-if="service.href" :href="service.href" target="_blank" class="footer-list-block__link">
          {{ service.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  setup() {
    const legalList = computed(() => [
      { text: 'Условия использования', link: { name: 'PageTermsOfUse' } },
      { text: 'Политика конфиденциальности', link: { name: 'PagePrivacyPolicy' } },
    ])

    const navList = computed(() => {
      return [
        { text: 'Главная', link: { name: 'PageLanding', hash: '#main' } },
        { text: 'Обо мне', link: { name: 'PageLanding', hash: '#about' } },
        { text: 'Связаться со мной', link: { name: 'PageLanding', hash: '#contacts' } },
      ]
    })

    const servicesList = computed(() => {
      return [
        { text: 'Список услуг', link: { name: 'PageLanding', hash: '#services' } },
        {
          text: 'Портфолио',
          href: 'https://docs.google.com/presentation/d/19Qhdi8mnNJEgEIKN8O-7NqRhBYQnq1Cd-QV_YvZkKtQ/edit?usp=sharing',
        },
      ]
    })

    return {
      legalList,
      navList,
      servicesList,
    }
  },
}
</script>

<style lang="postcss">
.block-footer__list-block {
  display: flex;
  flex-wrap: wrap;
  column-gap: 18px;
  row-gap: 32px;
}

.block-footer__list {
  list-style-type: none;
  max-width: 100%;
  min-width: 200px;
}

.block-footer__list-header {
  margin-bottom: 32px;
  color: var(--color-white);

  @media (max-width: $sizeMobile) {
    margin-bottom: 14px;
  }
}

.footer-list-block__link {
  text-decoration: none;
  font-size: var(--size-text-2xs);
  color: var(--color-gray);
  transition: color 0.5s ease-in-out;
}

.footer-list-block__link:hover {
  color: var(--color-white);
}

.footer-list-block__list-item {
  @media (max-width: $sizeMobile) {
    margin-top: 10px;
  }
}
</style>
