<template>
  <Component
    :is="tagName"
    v-bind="href ? { href: href } : null"
    :disabled="disabled"
    :tabindex="disabled ? -1 : 0"
    class="icon-button"
    :class="{ 'icon-button_pill': isPill }"
  >
    <SvgIcon :name="name" :icon-size="iconSize ? iconSize : 24" />
  </Component>
</template>

<script>
export default {
  name: 'IconButton',

  props: {
    name: { type: String, required: true },

    href: {
      type: String,
    },

    disabled: {
      type: Boolean,
    },

    isPill: {
      type: Boolean,
    },

    iconSize: {
      type: Number,
    },
  },

  computed: {
    tagName() {
      if (this.href) {
        return 'a'
      }

      return 'button'
    },
  },
}
</script>

<style>
.icon-button {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.icon-button:focus:not(:focus-visible) {
  outline: none;
}

.icon-button_disabled {
  pointer-events: none;
  touch-action: none;
}

.icon-button_pill {
  border-radius: 50%;
  color: var(--color-gray);
}

.icon-button_pill:hover {
  color: var(--color-white);
}
</style>
