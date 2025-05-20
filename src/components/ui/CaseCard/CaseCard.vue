<template>
  <div class="case-card">
    <img class="case-card__image" :src="image" :alt="title" />

    <div class="case-card__overlay">
      <div class="case-card__texts">
        <h4 class="case-card__title text-l">{{ title }}</h4>
        <hr class="case-card__devider" />
        <p class="case-card__description text-3xs">{{ description }}</p>
      </div>
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

.case-card__overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--color-white);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.case-card:hover .case-card__overlay {
  opacity: 1;
  pointer-events: auto;
}

.case-card__title {
  margin-bottom: 12px;
}

.case-card__devider {
  width: 100%;
  height: 1px;
  background-color: var(--color-white);
  margin-bottom: 24px;
}
</style>
