<template>
  <!-- <Component
    :is="div"
    class="titles-container"
    :class="[alignTitlesContClass]"
  ></Component> -->

  <div class="titles-container" :class="[alignTitlesContClass]">
    <h2 class="heading-thirdly text-gray">[{{ title }}]</h2>
    <h3 class="heading-secondary">{{ subtitle }}</h3>
  </div>
</template>

<script>
export default {
  name: 'BaseTitlesContainer',

  props: {
    title: {
      type: String,
    },

    subtitle: {
      type: String,
    },

    align: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right'].includes(value),
    },
  },

  computed: {
    alignTitlesContClass() {
      return this.align === 'right' ? 'titles-container_align-right' : 'titles-container_align-left'
    },
  },
}
</script>

<style>
.titles-container {
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.titles-container_align-left {
  text-align: left;
}

.titles-container_align-right {
  text-align: right;
}
</style>
