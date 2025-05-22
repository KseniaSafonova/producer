<template>
  <BaseContainer theme="dark" class="block-main">
    <h1 class="heading-primary block-main__title block-main__indent">
      Не ищите КРЕАТИВНУЮ команду — ищите того, кто создаст ее для вас
    </h1>

    <p class="text-m block-main__indent block-main__indent_small">
      Глеб Петров - креативный продюсер, который ведет проект от идеи до результата
    </p>

    <BaseButton
      theme="light"
      size="large"
      :to="{ name: 'PageLanding', hash: '#contacts' }"
      class="block-main__indent"
      >Связаться со мной</BaseButton
    >

    <img src="./assets/photo.jpg" alt="Gleb Petrov" class="block-main__img" />
  </BaseContainer>
</template>

<script>
export default {
  name: 'BlockMain',
}
</script>

<style lang="postcss">
.block-main {
  padding-bottom: 42px;
}

.block-main .base-container__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.block-main__indent {
  margin-bottom: 48px;
}

.block-main__indent_small {
  margin-bottom: 32px;
}

.block-main__title {
  text-transform: uppercase;
  text-align: center;
  max-width: 1132px;
  margin-top: 120px;

  @media (max-width: $sizeMobile) {
    margin-top: 60px;
    margin-bottom: 24px;
  }
}

.block-main__img {
  max-width: 800px;
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: $sizeMobile) {
    max-width: 100%;
    margin-bottom: 60px;
  }
}
</style>
