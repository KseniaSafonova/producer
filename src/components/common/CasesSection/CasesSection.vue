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
        :image="item.image"
        :title="item.title"
        :description="item.description"
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
        class="cases-section__button"
        >Портфолио
      </BaseButton>
    </BaseContainer>
  </BaseContainer>
</template>

<script>
import case1 from '@/assets/img/case1.png'
import case2 from '@/assets/img/case2.png'
import case3 from '@/assets/img/case3.png'
import case4 from '@/assets/img/case4.png'
import case5 from '@/assets/img/case5.png'
import case6 from '@/assets/img/case6.png'
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
      return [
        {
          image: case1,
          title: 'Игровые проекты и реклама',
          description: 'Ролики с актёрами, графикой и сценариями, которые цепляют',
        },
        {
          image: case2,
          title: 'Имиджевые фильмы',
          description: 'Сильный визуал и эмоция — для брендов, производств, продуктов и событий',
        },
        {
          image: case3,
          title: 'Туризм и музыка',
          description: 'Форматы на стыке культуры, искусства, приключений и саунд-дизайна',
        },
        {
          image: case4,
          title: 'YouTube и юмор',
          description: 'Контент, который живёт в онлайне и офлайне, цепляет и разлетается',
        },
        {
          image: case5,
          title: 'Технологии и инсталляции',
          description: 'Кейсы с вовлечением, дополненной реальностью, IT и новыми форматами',
        },
        {
          image: case6,
          title: 'Ивенты',
          description: 'От концепций до бекстейджа мероприятий',
        },
      ]
    },
  },
}
</script>

<style lang="postcss">
.cases-section {
  padding: 80px 0;
  color: var(--color-primary);
}

.cases-section__gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  padding: 0;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 4px;
  }
}

.cases-section__description .base-container__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
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
