import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '@/views/NewsView.vue'
import SignInView from '@/views/SignInView.vue'
import SingleNewsComponent from '@/views/SingleNewsComponent.vue'
import AdminComponent from '@/views/AdminComponent.vue'
import ChatbotComponent from '@/components/ChatbotComponent.vue'
import SuperAdminComponent from '@/views/SuperAdminComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: NewsView
    },
    {
      path: '/login',
      name: 'Login',
      component: SignInView
    },
    {
      path: '/news/:id',
      name: 'NewsItem',
      component: SingleNewsComponent,
      props: true,  
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminComponent
    },
    {
      path: '/chatbot',
      name: 'Chatbot',
      component: ChatbotComponent
    },
    {
      path: '/superadmin',
      name: 'SuperAdmin',
      component: SuperAdminComponent
    },
  ]
})

export default router
