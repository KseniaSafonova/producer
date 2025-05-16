import { defineStore } from 'pinia'
import { ref, onMounted, onBeforeUnmount } from 'vue'

export const useDeviceStore = defineStore('device', () => {
  const isMobile = ref(false)
  let isInitialized = false

  // Проверяем User Agent и ширину экрана
  const checkIfMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent,
    )

    const isSmallScreen = window.matchMedia('(max-width: 850px)').matches

    // Устанавливаем флаг isMobile
    isMobile.value = isMobileUA || isSmallScreen
  }

  const init = () => {
    if (isInitialized || typeof window === 'undefined') return

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    isInitialized = true

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkIfMobile)
    })
  }

  return { isMobile, init, checkIfMobile }
})
