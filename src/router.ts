import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/HomePage.vue'
// import About from './views/About.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: About
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
