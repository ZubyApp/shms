import { createRouter, createWebHistory } from 'vue-router'
import HomeBodyView from '../views/HomeBodyView.vue'
import LoginView from '../views/LoginView.vue'
import PatientsView from  '../views/PatientsView.vue'
import DoctorsView from '../views/DoctorsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeBodyView
    },
    {
      path: '/patients',
      name: 'patients',
      component: PatientsView
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: DoctorsView
    }
    
  ]
})


// {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }

export default router
