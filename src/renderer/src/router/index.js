import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@renderer/views/Home.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@renderer/views/Setting.vue')
    }
  ]
})

export default router
