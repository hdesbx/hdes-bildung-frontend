// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Layouts
//import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'


// Seiten
import Home from '@/pages/auth/Home.vue'
import Login from '@/pages/auth/Login.vue'



const routes = [
  // 👇 Auth-/Öffentliche Seiten (ohne Sidebar/Footer etc.)

  // 1️⃣ Startseite / Öffentlich, kein Layout
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/',
    component: AuthLayout,
    children: [

      { path: 'anmelden', name: 'Login', component: Login },
      //{ path: 'registrieren', name: 'Registrieren', component: () => import('@/pages/Registrieren.vue') },
    ]
  },



  // Fallback für nicht gefundene Routen
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
