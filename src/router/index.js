import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AccordionHome  from '@/views/Tutorials/AccordionHome.vue'
import Contact from "@/views/Tutorials/Contact.vue";
import LandingPage from "@/views/Tutorials/LandingPage.vue";
import ListApp from "@/views/Tutorials/ListApp.vue";
import CssDropdown from "@/views/Tutorials/CssDropdown.vue";
import Grid from "@/views/Tutorials/Grid.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/accordion',
      component: AccordionHome
    },
    {
      path: '/contact-us',
      component: Contact
    },
    {
      path: '/landing-page',
      component: LandingPage
    },
    {
      path: '/list-app',
      component: ListApp
    },
    {
      path: '/dropdown',
      component: CssDropdown
    },
    {
      path: '/grid',
      component: Grid
    },

  ]
})

export default router
