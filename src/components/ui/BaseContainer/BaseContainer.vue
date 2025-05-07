<template>
  <Component
    :is="tag"
    class="base-container"
    :class="[themeClass, { 'base-container_no-indets': noIndents }]"
  >
    <template v-if="noIndents">
      <slot></slot>
    </template>

    <div v-else class="base-container__inner">
      <slot></slot>
    </div>
  </Component>
</template>

<script>
export default {
  name: 'BaseContainer',

  props: {
    tag: {
      type: String,
      default: 'div',
    },

    theme: {
      type: String,
      default: 'light',
      validator: function (value) {
        return ['light', 'dark'].indexOf(value) !== -1
      },
    },

    noIndents: {
      type: Boolean,
    },
  },

  computed: {
    themeClass() {
      return `base-container_theme_${this.theme}`
    },
  },
}
</script>

<style lang="postcss">
.base-container {
  --bc-bg-color: var(--color-white);
  --bc-text-color: var(--color-primary);

  background-color: var(--bc-bg-color);
  color: var(--bc-text-color);

  padding: 20px 12px;
}

.base-container_no-indets {
  padding: 0;
}

.base-container_theme_dark {
  --bc-bg-color: var(--color-black);
  --bc-text-color: var(--color-white);
}

.base-container__inner {
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  width: 100%;
}
</style>
