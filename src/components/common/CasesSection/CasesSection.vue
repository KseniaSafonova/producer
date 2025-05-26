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
        :image="
          isMobile
            ? getImageUrl(`./assets/case-mobile${index + 1}.jpg`)
            : getImageUrl(`./assets/case${index + 1}.jpg`)
        "
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
          title: 'Игровые проекты и реклама',
          description: 'Ролики с актёрами, графикой и сценариями, которые цепляют',
          href: 'https://youtube.com/playlist?list=PLVPGXYtoA6q3nU00MowoRSJ_QkpdxWgHj&si=3yZLClvaZd9XZpxV',
        },
        {
          title: 'Имиджевые фильмы',
          description: 'Сильный визуал и эмоция — для брендов, производств, продуктов и событий',
          href: 'https://www.youtube.com/playlist?list=PLVPGXYtoA6q3L8F3yin7-asbKhpSNdoPG',
        },
        {
          title: 'Туризм и музыка',
          description: 'Форматы на стыке культуры, искусства, приключений и саунд-дизайна',
          href: 'https://www.youtube.com/playlist?list=PLVPGXYtoA6q2sQHgmHA6pazbNgmY1BXXl',
        },
        {
          title: 'YouTube и юмор',
          description: 'Контент, который живёт в онлайне и офлайне, цепляет и разлетается',
          href: 'https://www.youtube.com/playlist?list=PLVPGXYtoA6q2EAfg4KB6aIWhLWhtu_KYd',
        },
        {
          title: 'Технологии и инсталляции',
          description: 'Кейсы с вовлечением, дополненной реальностью, IT и новыми форматами',
          href: 'https://youtube.com/playlist?list=PLVPGXYtoA6q3fhSMovULuy6_fguqEAgle&si=m-jyEuq8mKKt28aQ',
        },
        {
          title: 'Ивенты',
          description: 'От концепций до бекстейджа мероприятий',
          href: 'https://www.youtube.com/playlist?list=PLVPGXYtoA6q3-7kst5zEcfEp4YHi7JXD1',
        },
      ]

      return cases
    },
  },

  methods: {
    getImageUrl(name) {
      return new URL(name, import.meta.url).href
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
