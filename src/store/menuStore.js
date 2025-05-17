import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const isMenuOpen = ref(false)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  const openMenu = () => {
    isMenuOpen.value = true
  }

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    openMenu,
  }
})
