<template>
  <BaseContainer :theme="containerTheme" class="block-about">
    <div class="block-about__container">
      <div class="block-about__text-section">
        <BaseTitlesContainer title="Обо мне" class="block-about__title">
          <template #subtitle>
            <span>Уникален не я, </span>
            <span>а мой опыт</span>
          </template>
        </BaseTitlesContainer>

        <p class="text-l text-black block-about__text">
          Годы в Премьер и Высшей Лиге КВН, сценаристика, реклама, документалистика, работа с
          художниками, фестивалями, диджеинг, йога — и параллельно проекты для бизнеса, государства,
          стартапов и IT.
        </p>

        <p class="text-l text-black block-about__text">
          Этот опыт дал мне сеть нестандартно мыслящих людей, чьи таланты я привлекаю под идею и
          задачу.
        </p>

        <BaseButton
          href="https://docs.google.com/presentation/d/19Qhdi8mnNJEgEIKN8O-7NqRhBYQnq1Cd-QV_YvZkKtQ/edit?usp=sharing"
          target="_blank"
          size="small"
          class="block-about__btn"
          >Портфолио</BaseButton
        >
      </div>

      <div class="block-about__img-section">
        <img class="block-about__img" src="./assets/img_about.png" alt="img about producer" />
      </div>
    </div>
  </BaseContainer>
</template>

<script>
export default {
  name: 'block-about',

  data() {
    return {
      isMobile: false,
    }
  },

  computed: {
    containerTheme() {
      return this.isMobile ? 'light' : 'dark'
    },
  },

  mounted() {
    this.checkScreen()
    window.addEventListener('resize', this.checkScreen)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreen)
  },

  methods: {
    checkScreen() {
      this.isMobile = window.innerWidth <= 1200
    },
  },
}
</script>

<style lang="postcss">
.block-about {
  $sizeTablet: 1200px;

  overflow: hidden;
}

.block-about__container {
  display: flex;
  position: relative;
  z-index: 0;

  @media screen and (max-width: $sizeTablet) {
    flex-direction: column;
  }
}

.block-about__text-section {
  background-color: var(--color-gray-30);
  position: relative;
  flex: 1 1 60%;
  padding-top: 40px;
  padding-right: 25%;

  @media screen and (max-width: $sizeTablet) {
    margin: -15px -15px;
    padding: 15px;
  }
}

.block-about__text-section::before {
  background-color: var(--color-gray-30);
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;

  @media screen and (max-width: $sizeTablet) {
    content: none;
  }
}

.block-about__title {
  color: var(--color-black);
  margin-bottom: 40px;

  @media screen and (max-width: $sizeMobile) {
    margin-bottom: 24px;
  }
}

.block-about__text {
  max-width: 522px;

  @media screen and (max-width: $sizeMobile) {
    font-size: var(--size-text-xs);
  }
}

.block-about__text:not(:last-child) {
  margin-bottom: 30px;
}

.block-about__btn {
  max-width: 197px;
  margin-top: 75px;
  margin-bottom: 75px;

  @media screen and (max-width: $sizeMobile) {
    max-width: 194px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
}

.block-about__img-section {
  background-color: var(--color-black);
  flex: 1 1 28%;
  padding-top: 40px;

  @media screen and (max-width: $sizeTablet) {
    background-color: initial;
    padding-top: 10px;
    display: flex;
  }
}

.block-about__img {
  transform: translateX(-40%);
  max-width: 738px;
  width: 170%;

  @media screen and (max-width: $sizeTablet) {
    transform: none;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
