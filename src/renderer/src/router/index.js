import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@renderer/views/Home.vue')
    },
    {
      path: '/other',
      name: 'Other',
      component: () => import('@renderer/views/Other.vue')
    }
  ]
})

export default router
