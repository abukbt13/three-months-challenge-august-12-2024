import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import week1 from './week1.js'
import week2 from './week2.js'
import week3 from './week3.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      ...week1,
      ...week2,
      ...week3,
    {
      path: '/',
      component: HomeView
    }

  ]
})

export default router
