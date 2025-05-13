import { createRouter, createWebHistory } from 'vue-router'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import PageLanding from '@/views/PageLanding/PageLanding.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'LayoutDefault',
      component: LayoutDefault,
      children: [{ path: '', name: 'PageLanding', component: PageLanding }],
    },
  ],
  scrollBehavior(to, from) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 50,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

export default router
