import { createRouter, createWebHistory } from 'vue-router'
import Home from './View/Home.vue'
import About from './View/About.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
  ]
})
export default router;