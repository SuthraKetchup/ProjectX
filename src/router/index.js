import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/user/HomeView.vue'
import Search from '@/views/user/SearchView.vue'
import Profile from '@/views/user/ProfileView.vue'
import Success from '@/views/user/SuccessView.vue'
import Checkout from '@/views/user/CheckoutView.vue'
import Cart from '@/views/user/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
  ]
})

export default router
