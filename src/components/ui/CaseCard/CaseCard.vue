<template>
  <div class="case-card">
    <a class="case-card__link" :href="href" target="_blank" />

    <img class="case-card__image" :src="image" :alt="title" />

    <div class="case-card__overlay">
      <h4 class="case-card__title text-l">{{ title }}</h4>
      <hr class="case-card__devider" />
      <p class="case-card__description text-3xs">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseCard',

  props: {
    image: String,
    title: String,
    description: String,
    href: String,
  },
}
</script>

<style lang="postcss">
.case-card {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
}

.case-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease-in-out;
}

.case-card:hover .case-card__image {
  transform: scale(1.1);
}

.case-card__link {
  position: absolute;
  inset: 0;
  display: block;
  z-index: 10;
}

.case-card__overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--color-white);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  transition: opacity 0.3s ease;
  pointer-events: none;
  text-decoration: none;

  @media (max-width: 500px) {
    padding: 5px;
    justify-content: center;
  }
}

.case-card:hover .case-card__overlay {
  opacity: 1;
  pointer-events: auto;
}

.case-card__description {
  margin-bottom: 86px;

  @media (max-width: 500px) {
    font-size: var(--size-text-5xs);
    margin-bottom: 0px;
  }
}

.case-card__title {
  margin-bottom: 12px;

  @media (max-width: 400px) {
    font-size: var(--size-text-3xs);
  }
}

.case-card__devider {
  width: 100%;
  height: 1px;
  background-color: var(--color-white);
  margin-bottom: 24px;

  @media (max-width: 400px) {
    margin-bottom: 12px;
  }
}
</style>
