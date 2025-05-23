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
      children: [
        { path: '', name: 'PageLanding', component: PageLanding },
        { path: 'privacy', name: 'PrivacyPolicy', component: () => import('@/components/common/BlockPrivacyPolicy/PrivacyPolicy.vue') },
        { path: 'terms', name: 'TermsOfUse', component: () => import('@/components/common/BlockTermsOfUse/BlockTermsOfUse.vue')}
      ],
    },
  ],
  scrollBehavior(to, from) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            top: 80,
            behavior: 'smooth',
          })
        }, 500)
      })
    }

    return { top: 0 }
  },
})

export default router
