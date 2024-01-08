import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PublicationsView from '../views/PublicationsView.vue';
import StoreView from '../views/StoreView.vue';
import SubmitView from '../views/SubmitView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/publications',
      name: 'publications',
      component: () => import('../views/PublicationsView.vue'),
    },

    {
      path: '/submit',
      name: 'submit',
      component: () => import('../views/SubmitView.vue'),
    },

    {
      path: '/store',
      name: 'store',
      component: () => import('../views/StoreView.vue'),
    },

  ]
})

export default router
