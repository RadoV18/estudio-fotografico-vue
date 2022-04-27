import { createRouter, createWebHistory } from 'vue-router'
import ContactUsView from '../views/ContactUsView.vue'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import RequirementsView from '../views/RequirementsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/requirements',
    name: 'requirements',
    component: RequirementsView
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
