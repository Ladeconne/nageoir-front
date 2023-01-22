import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'
import InstructorsPage from './views/InstructorsPage.vue'
import PoolsPage from './views/PoolsPage.vue'
import PrivacySettings from './views/PrivacySettings.vue'
import TermsPage from './views/TermsPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
  {
    path: '/instructors',
    name: 'instructors',
    component: InstructorsPage,
  },
  {
    path: '/pools',
    name: 'pools',
    component: PoolsPage,
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacySettings,
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
