import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home-page',
    component: () => import('@/views/HomePage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
