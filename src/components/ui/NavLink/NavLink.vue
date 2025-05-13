<template>
  <RouterLink :to="to" class="nav-link" :class="{ 'nav-link_selected': selected }">
    {{ name }}
  </RouterLink>
</template>

<script>
export default {
  name: 'NavLink',

  props: {
    name: {
      type: String,
    },

    to: {
      type: Object,
    },

    selected: {
      type: Boolean,
    },
  },
}
</script>

<style lang="postcss">
.nav-link {
  background-color: var(--color-black);
  display: inline-block;
  font-size: 16px;
  padding: 7px 24px;
  min-height: 40px;
  text-decoration: none;
  position: relative;

  --cut-width: 4px; /* Ширина выреза/выступа */
  --cut-height: 12px; /* Глубина выреза/выступа */
}

.nav-link::before {
  content: '';
  position: absolute;
  width: var(--cut-width);
  height: var(--cut-height);
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: var(--color-black);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: var(--cut-width);
  height: var(--cut-height);
  top: 50%;
  right: 0;
  transform: translate(100%, -50%);
  background-color: var(--color-black);
  z-index: 1;
}

.nav-link_selected {
  background-color: var(--color-white);
  color: var(--color-black);
  font-weight: 700;
}

.nav-link_selected.nav-link::after {
  background-color: var(--color-white);
}

.nav-link:hover {
  background-color: var(--color-white);
  color: var(--color-black);
}

.nav-link:hover.nav-link::after {
  background-color: var(--color-white);
}
</style>
