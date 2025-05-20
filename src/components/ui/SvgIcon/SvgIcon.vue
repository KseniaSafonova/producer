<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :href="symbolId" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true,
    },

    iconSize: {
      type: Number,
    },
  },

  computed: {
    symbolId() {
      return `#icon-${this.name}`
    },

    size() {
      return `${this.iconSize || 24}px`
    },
  },
}
</script>

<style>
.svg-icon {
 /* fill: currentColor;*/

  width: v-bind(size);
  height: v-bind(size);
  flex-shrink: 0;
}
</style>
