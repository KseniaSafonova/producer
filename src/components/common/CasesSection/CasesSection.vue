<template>
  <BaseContainer no-indents class="cases-section">
    <BaseContainer tag="div">
      <BaseTitlesContainer
        title="Кейсы"
        subtitle="Примеры работ по направлениям"
        class="cases-section__header"
      />
    </BaseContainer>

    <div class="cases-section__gallery">
      <CaseCard
        v-for="(item, index) in casesList"
        :key="index"
        :image="isMobile ? item.imageMobile : item.image"
        :title="item.title"
        :description="item.description"
        :href="item.href"
      />
    </div>

    <BaseContainer class="cases-section__description">
      <template v-if="isMobile">
        <p class="text-s">
          Мои проекты — это больше, чем просто работа. Это опыт, эмоции и идеи, воплощённые в жизнь.
          Игровые проекты и реклама, имиджевые фильмы и музыкальные истории, туризм и юмор,
          YouTube-контент, технологии, инсталляции и живые ивенты — я уже успешно реализовал все это
          и готов к новым вызовам.
        </p>

        <p class="text-s">Большая часть моих работ представлено по ссылке ниже.</p>
      </template>

      <p v-else class="text-s">Креатив, стратегия и результат</p>

      <BaseButton
        href="https://docs.google.com/presentation/d/19Qhdi8mnNJEgEIKN8O-7NqRhBYQnq1Cd-QV_YvZkKtQ/edit?usp=sharing"
        target="_blank"
        class="cases-section__button"
        >Портфолио
      </BaseButton>
    </BaseContainer>
  </BaseContainer>
</template>

<script>
import { useDeviceStore } from '@/store/deviceStore'
import { storeToRefs } from 'pinia'
import case1 from './assets/case1.jpg'
import case2 from './assets/case2.jpg'
import case3 from './assets/case3.jpg'
import case4 from './assets/case4.jpg'
import case5 from './assets/case5.jpg'
import case6 from './assets/case6.jpg'
import caseMobile1 from './assets/case-mobile1.jpg'
import caseMobile2 from './assets/case-mobile2.jpg'
import caseMobile3 from './assets/case-mobile3.jpg'
import caseMobile4 from './assets/case-mobile4.jpg'
import caseMobile5 from './assets/case-mobile5.jpg'
import caseMobile6 from './assets/case-mobile6.jpg'

export default {
  name: 'CasesSection',

  setup() {
    const deviceStore = useDeviceStore()
    const { isMobile } = storeToRefs(deviceStore)
    return { isMobile }
  },

  computed: {
    casesList() {
      const cases = [
        {
          image: case1,
          imageMobile: caseMobile1,
          title: 'Игровые проекты и реклама',
          description: 'Ролики с актёрами, графикой и сценариями, которые цепляют',
          href: 'https://youtube.com/playlist?list=PLVPGXYtoA6q3nU00MowoRSJ_QkpdxWgHj&si=3yZLClvaZd9XZpxV',
        },
        {
          image: case2,
          imageMobile: caseMobile2,
          title: 'Имиджевые фильмы',
          description: 'Сильный визуал и эмоция — для брендов, производств, продуктов и событий',
          href: 'https://www.youtube.com/playlist?list=PLVPGXYtoA6q3L8F3yin7-asbKhpSNdoPG',
        },
        {
          image: case3,
          imageMobile: caseMobile3,
          title: 'Туризм и музыка',
          description: 'Форматы на стыке культуры, искусства, приключений и саунд-дизайна',
          href: 'https://www.youtube.com/playlist?list=PLVPGXYtoA6q2sQHgmHA6pazbNgmY1BXXl',
        },
        {
          image: case4,
          imageMobile: caseMobile4,
          title: 'YouTube и юмор',
          description: 'Контент, который живёт в онлайне и офлайне, цепляет и разлетается',
          href: 'https://www.youtube.com/playlist?list=PLVPGXYtoA6q2EAfg4KB6aIWhLWhtu_KYd',
        },
        {
          image: case5,
          imageMobile: caseMobile5,
          title: 'Технологии и инсталляции',
          description: 'Кейсы с вовлечением, дополненной реальностью, IT и новыми форматами',
          href: 'https://youtube.com/playlist?list=PLVPGXYtoA6q3fhSMovULuy6_fguqEAgle&si=m-jyEuq8mKKt28aQ',
        },
        {
          image: case6,
          imageMobile: caseMobile6,
          title: 'Ивенты',
          description: 'От концепций до бекстейджа мероприятий',
          href: 'https://www.youtube.com/playlist?list=PLVPGXYtoA6q3-7kst5zEcfEp4YHi7JXD1',
        },
      ]

      return cases
    },
  },
}
</script>

<style lang="postcss">
.cases-section {
  padding-top: 40px;
  padding-bottom: 40px;
  color: var(--color-primary);

  @media (max-width: $sizeMobile) {
    padding-top: 0px;
  }
}

.cases-section__gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 0;
  padding: 0;
  margin-bottom: 20px;

  @media (max-width: $sizeMobile) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 4px;
  }
}

.cases-section__description .base-container__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: $sizeMobile) {
    flex-direction: column;
    align-items: stretch;
  }
}

.cases-section__button {
  max-width: 100%;
  width: 302px;

  @media (max-width: $sizeMobile) {
    margin-top: 24px;
    width: 100%;
  }
}
</style>
