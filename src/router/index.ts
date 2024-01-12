import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

import {LoginCallback} from '@okta/okta-vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/submit',
      name: 'submit',
      component: () => import('../views/SubmitView.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/StoreView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard/DashBoard.vue')
    },
    {
      path: '/dashboard/submissions',
      name: 'submissions',
      component: () => import('../views/Dashboard/SubmissionView.vue')
    },
    {
      path: '/dashboard/posts',
      name: 'PostLists',
      component: () => import('../views/Post/ViewPost.vue')
    },
    {
      path: '/dashboard/post/new',
      name: 'CreatePost',
      component: () => import('../views/Post/CreatePost.vue')
    },
    {
      path: '/dashboard/post/{:id}',
      name: 'EditPost',
      component: () => import('../views/Post/EditPost.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/login/callback',
      component: LoginCallback
    },
    {
      path: '/profile',
      component: () => import('../views/Dashboard/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/publications',
      name: 'publications',
      component: () => import('../views/PublicationsView.vue'),
    }
  ]
})

export default router
