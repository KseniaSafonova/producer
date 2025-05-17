<template>
  <!-- <Component
    :is="div"
    class="titles-container"
    :class="[alignTitlesContClass]"
  ></Component> -->

  <div class="titles-container" :class="[alignTitlesContClass]">
    <h2 class="heading-thirdly text-gray">[{{ title }}]</h2>

    <h3 class="heading-secondary" v-if="subtitle" />
    <h3 class="heading-secondary" v-if="$slots.subtitle">
      <slot name="subtitle" />
    </h3>
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
  margin-bottom: 24px;
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

.heading-secondary {
  display: inline-flex;
  flex-wrap: wrap;
  column-gap: 12px;
}
</style>
