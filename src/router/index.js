import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import CookiePolicy from '@/views/CookiePolicy.vue'
import termsOfService from '@/views/TermsOfService.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
      path: "/privacyPolicy",
      name: 'privacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: "/cookiePolicy",
      name: 'CookiePolicy',
      component: CookiePolicy
    },
    {
      path: "/termsOfService",
      name: 'TermsOfService',
      component: termsOfService
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/"
    }
]

const router = createRouter({
    history: createWebHistory("/en/bridge/"),
    routes
})

export default router
