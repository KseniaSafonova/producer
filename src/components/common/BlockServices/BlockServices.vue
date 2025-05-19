<template>
  <BaseContainer class="block-services">
    <div class="block-services__container">
      <BaseTitlesContainer
        align="right"
        title="Услуги"
        subtitle="Основные направления"
        class="block-services__title"
      >
      </BaseTitlesContainer>

      <div class="block-services__services-section">
        <div
          v-for="(service, index) in servicesList"
          :key="index"
          class="block-services__service-item"
        >
          <SvgIcon :name="service.name" :size="20" class="block-services__service-img" />

          <p class="block-services__service-title text-s text-w700">{{ service.title }}</p>
          <p class="block-services__service-description text-3xs">{{ service.description }}</p>
        </div>
      </div>

      <div class="block-services__text-section text-l">
        <p>Стоимость высчитывается после исследования задачи.</p>
        <p>Каждый проект начинается с разговора и понимания. Только потом — цифры.</p>
      </div>

      <BaseButton href="" size="small" class="block-services__btn">Связаться</BaseButton>
    </div>
  </BaseContainer>
</template>

<script>
export default {
  name: 'block-services',

  computed: {
    servicesList() {
      return [
        {
          name: 'pen',
          title: 'Креативные концепции',
          description: 'Глубоко вникаю в суть задачи и создаю текст, сценарии, концепции и план',
        },
        {
          name: 'star',
          title: 'Продюсирование',
          description: 'Организую съёмку под ключ: команда, процессы, результат и контроль',
        },
        {
          name: 'smile',
          title: 'Ивенты',
          description: 'Креативная и техническая поддержка событий: от идеи до атмосферы',
        },
        {
          name: 'clock',
          title: 'Мозговые штурмы',
          description: 'Направляю команды в процессе поиска решений и креатива',
        },
      ]
    },
  },
}
</script>

<style lang="postcss">
.block-services__container {
  padding-top: 92px;
  padding-bottom: 120px;

  @media screen and (max-width: $sizeMobile) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}

.block-services__title {
  margin-bottom: 80px;

  @media screen and (max-width: $sizeMobile) {
    margin-bottom: 64px;
  }
}

.block-services__services-section {
  display: flex;
  gap: 20px;
  padding-bottom: 70px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--color-primary);

  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: $sizeMobile) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-bottom: 102px;
    margin-bottom: 24px;
  }
}

.block-services__service-img {
  margin-bottom: 15px;

  @media screen and (max-width: $sizeMobile) {
    margin-bottom: 12px;
  }
}

.block-services__service-title {
  margin-bottom: 24px;
}

.block-services__btn {
  max-width: 197px;
  margin-top: 40px;

  @media screen and (max-width: $sizeMobile) {
    max-width: 194px;
  }
}
</style>
