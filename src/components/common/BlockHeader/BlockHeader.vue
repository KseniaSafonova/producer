<template>
  <BaseContainer
    tag="header"
    theme="dark"
    class="block-header"
    :class="{ 'block-header_is-open': isMenuOpen, 'block-header_is-mobile': isMobile }"
  >
    <span class="block-header__logo text-w700">Gleb Petrov</span>

    <div class="block-header__actions" v-if="isMobile">
      <Transition name="burger">
        <IconButton
          :key="isMenuOpen"
          :name="isMenuOpen ? 'close' : 'menu'"
          @click="toggleMenu"
          class="block-header__burger"
        />
      </Transition>

      <Transition name="contacts">
        <BaseButton
          v-if="isButtonShow"
          theme="light"
          size="small"
          :to="{ name: 'PageLanding', hash: '#contacts' }"
          @click="closeMenu"
        >
          Контакты
        </BaseButton>
      </Transition>
    </div>

    <Transition :name="isMobile ? 'menu' : ''">
      <nav class="block-header__nav" v-if="isMenuShow" @click="closeMenu">
        <NavLink
          v-for="(navLink, index) in navList"
          :key="index"
          :name="navLink.name"
          :to="navLink.link"
          :selected="isSelected(navLink.link)"
        />

        <BaseButton
          theme="light"
          size="small"
          :to="{ name: 'PageLanding', hash: '#contacts' }"
          class="block-header__contacts"
        >
          Контакты
        </BaseButton>
      </nav>
    </Transition>
  </BaseContainer>
</template>

<script>
import { useDeviceStore } from '@/store/deviceStore'
import { useMenuStore } from '@/store/menuStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'BlockHeader',

  setup() {
    const deviceStore = useDeviceStore()
    const menuStore = useMenuStore()

    const { isMobile } = storeToRefs(deviceStore)
    const { isMenuOpen } = storeToRefs(menuStore)

    const { toggleMenu, openMenu, closeMenu } = menuStore
    return { isMobile, isMenuOpen, toggleMenu, openMenu, closeMenu }
  },

  data() {
    return {
      currentItem: '#main',
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler() {
        this.currentItem = this.$route.hash
      },
    },
  },

  computed: {
    navList() {
      return [
        { name: 'Главная', link: { name: 'PageLanding', hash: '#main' } },
        { name: 'Обо мне', link: { name: 'PageLanding', hash: '#about' } },
        { name: 'Услуги', link: { name: 'PageLanding', hash: '#services' } },
        { name: 'Кейсы', link: { name: 'PageLanding', hash: '#cases' } },
      ]
    },

    isButtonShow() {
      return !this.isMenuOpen && this.isMobile
    },

    isMenuShow() {
      return this.isMenuOpen || !this.isMobile
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    isSelected(link) {
      if (link.name === this.$route.name && `${link.hash}` === this.currentItem) {
        return true
      }

      if (`${link.hash}` === '#main' && this.currentItem === '') {
        return true
      }

      return false
    },

    handleScroll() {
      const sections = this.navList.map((item) => item.link.hash.replace('#', ''))
      const scrollPosition = window.scrollY + 100

      let isFound = false
      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.currentItem = `#${section}`
          isFound = true
          break
        }
      }

      if (!isFound) {
        this.currentItem = `not found`
      }
    },
  },
}
</script>

<style lang="postcss">
.block-header {
  $headerTabletSize: 850px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  max-height: 100vh;
}

.block-header .base-container__inner {
  display: flex;
  align-items: center;
  column-gap: 24px;
  flex-wrap: wrap;

  @media (max-width: $sizeMobile) {
    align-items: center;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;
}

.block-header__logo {
  font-family: var(--font-flex);
  text-transform: uppercase;
  margin-right: auto;

  font-size: var(--size-text-5xl);
  line-height: 48px;

  @media (max-width: $sizeMobile) {
    max-width: 50px;
  }

  @media (max-width: 375px) {
    font-size: var(--size-text-3xl);
  }
}

.block-header__nav {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.block-header_is-mobile .block-header__nav {
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  margin: 36px 12px 60px 12px;
  width: 100%;
  background-color: var(--color-black);
}

.block-header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
}

.block-header__burger {
  transition: 0.3s ease-in-out;

  @media (max-width: $headerTabletSize) {
    display: block;
    justify-self: flex-end;
  }
}

.block-header__contacts {
  @media (max-width: $headerTabletSize) {
    width: 100%;
  }
}

.block-header__contacts .base-button__inner {
  font-size: 16px;

  @media (max-width: $headerTabletSize) {
    justify-content: left;
    padding-left: 24px;
    padding-right: 24px;
  }
}

/* Анимации */
.menu-enter-active,
.menu-leave-active {
  transition: all 0.4s ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-3%);
}

.contacts-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contacts-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contacts-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.contacts-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

.burger-enter-active,
.burger-leave-active {
  transition: all 0.3s ease-in-out;
  position: absolute;
  right: 15px;
}

.burger-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.burger-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
