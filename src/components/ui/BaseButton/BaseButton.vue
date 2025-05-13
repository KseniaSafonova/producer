<template>
  <Component
    :is="tagName"
    v-bind="href ? { href: href } : null"
    :to="to"
    :disabled="disabled || loading"
    :tabindex="disabled || loading ? -1 : 0"
    class="base-button"
    :class="[themeClass, sizeClass, { 'base-button_full_width': isFullWidth }]"
  >
    <svg
      class="base-button__boxes base-button__boxes_left"
      width="18"
      height="10"
      viewBox="0 0 18 10"
    >
      <rect y="2" width="8" height="8" :fill="fillColor" />
      <rect x="14" width="4" height="4" :fill="fillColor" />
    </svg>

    <svg
      class="base-button__boxes base-button__boxes_right"
      width="55"
      height="4"
      viewBox="0 0 55 4"
    >
      <rect x="47" width="8" height="4" :fill="fillColor" />
      <rect width="8" height="4" :fill="fillColor" />
    </svg>

    <div class="base-button__inner">
      <slot></slot>
    </div>
  </Component>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    theme: {
      type: String,
      default: 'dark',
      validator: function (value) {
        return ['dark', 'light', 'accent'].indexOf(value) !== -1
      },
    },

    to: {
      type: Object,
    },

    href: {
      type: String,
    },

    size: {
      type: String,
      default: 'middle',
      validator: function (value) {
        return ['small', 'middle', 'large'].indexOf(value) !== -1
      },
    },

    loading: {
      type: Boolean,
    },

    disabled: {
      type: Boolean,
    },

    isFullWidth: {
      type: Boolean,
    },
  },

  computed: {
    tagName() {
      if (this.to) {
        return 'router-link'
      }

      if (this.href) {
        return 'a'
      }

      return 'button'
    },

    themeClass() {
      return `base-button_theme_${this.theme}`
    },

    sizeClass() {
      return `base-button_size_${this.size}`
    },

    fillColor() {
      if (this.theme === 'dark') {
        return 'var(--color-black)'
      }

      if (this.theme === 'light') {
        return 'var(--color-white)'
      }

      return 'var(--color-accent)'
    },
  },
}
</script>

<style lang="postcss">
.base-button {
  --btn-bg-color: var(--color-black);
  --btn-text-color: var(--color-white);

  /* начало выреза */
  --btn-box-indent-right: 15px;

  /* размеры верхнего выреза */
  --btn-box-top-w: 6px;
  --btn-box-top-h: 5px;

  /* размеры нижнего выреза */
  --btn-box-bottom-w: 8px;
  --btn-box-bottom-h: 5px;

  /* размеры бокового выреза */
  --btn-box-right-w: 3px;
  --btn-box-right-h: 22px;

  position: relative;

  line-height: 120%;
  letter-spacing: calc(1em / 25);
  font-weight: 700;
  border: none;
  text-decoration: none;
  min-width: 109px;
  max-width: 100%;
  display: inline-block;
  cursor: pointer;
  appearance: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  height: 40px;
}

.base-button:focus:not(:focus-visible) {
  outline: none;
}

.base-button_disabled,
.base-button_selected:not(.base-button_click_allow) {
  pointer-events: none;
  touch-action: none;
}

.base-button_full_width {
  width: 100%;
}

.base-button:disabled {
  --btn-bg-color: var(--color-gray);
  --btn-text-color: var(--color-dark);
}

.base-button__inner {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 14px 10px 10px;
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  height: 100%;

  clip-path: polygon(
    /* Верхняя граница */ 0 0,
    var(--btn-box-indent-right) 0,
    /* Начинаем верхний вырез слева */ var(--btn-box-indent-right) var(--btn-box-top-h),
    /* Верхний вырез ( вниз) */ var(--btn-box-indent-right) var(--btn-box-top-h),
    calc(var(--btn-box-indent-right) + var(--btn-box-top-w)) var(--btn-box-top-h),
    /* Конец выреза  */ calc(var(--btn-box-indent-right) + var(--btn-box-top-w)) 0,
    calc(100% - var(--btn-box-right-w)) 0,

    /* Правая граница */ calc(100% - var(--btn-box-right-w))
      calc(50% - calc(var(--btn-box-right-h) / 2)),
    /* Верхняя точка выступа */ 100% calc(50% - var(--btn-box-right-h) / 2),
    /* Выступ вправо на 4px */ 100% calc(50% + var(--btn-box-right-h) / 2),
    /* Нижняя точка выступа */ calc(100% - var(--btn-box-right-w))
      calc(50% + var(--btn-box-right-h) / 2),
    /* Возврат к основной форме */ calc(100% - var(--btn-box-right-w)) 100%,

    /* Нижняя граница */ calc(100% - 30% + var(--btn-box-bottom-w)) 100%,
    /* Нижний вырез (30% от правого края - 8px) */ calc(100% - 30% + var(--btn-box-bottom-w))
      calc(100% - var(--btn-box-bottom-h)),
    calc(100% - 30%) calc(100% - var(--btn-box-bottom-h)),
    calc(100% - 30%) 100%,
    0 100%
  );
}

/* тема dark */
.base-button_theme_dark {
  --btn-bg-color: var(--color-black);
  --btn-text-color: var(--color-white);
}

.base-button_theme_dark.base-button:active {
  --btn-bg-color: var(--color-dark);
}

/* тема light */
.base-button_theme_light {
  --btn-bg-color: var(--color-white);
  --btn-text-color: var(--color-black);
}

.base-button_theme_light.base-button:active {
  --btn-bg-color: var(--color-gray-30);
}

/* тема accent */
.base-button_theme_accent {
  --btn-bg-color: var(--color-accent);
  --btn-text-color: var(--color-black);
}

/* size */
.base-button_size_small {
  min-height: 40px;
  font-size: 14px;

  /* размеры бокового выреза */
  --btn-box-right-w: 3px;
  --btn-box-right-h: 20px;
}

.base-button_size_middle {
  min-height: 48px;
  font-size: 15px;

  /* размеры бокового выреза */
  --btn-box-right-w: 3px;
  --btn-box-right-h: 22px;
}

.base-button_size_large {
  min-height: 56px;
  min-width: 280px;
  font-size: 16px;

  /* размеры верхнего выреза */
  --btn-box-top-w: 8px;
  --btn-box-top-h: 7px;

  /* размеры бокового выреза */
  --btn-box-right-w: 4px;
  --btn-box-right-h: 24px;
}

/* доп элементы */
.base-button__boxes {
  position: absolute;
  transition: transform 0.5s ease-in-out;
  top: 10px;
}

.base-button__boxes_right {
  right: calc(5px + var(--btn-box-right-w));
  transition: transform 0.5s ease-in-out;
}

.base-button__boxes_left {
  left: 0;
}

.base-button:hover:not(:disabled) .base-button__boxes_left {
  transform: translateY(-26px);
}

.base-button:hover:not(:disabled) .base-button__boxes_right {
  transform: translateY(-12px);
}
</style>
