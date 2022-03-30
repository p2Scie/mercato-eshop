import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/user/Home.vue';
import store from '@/store';

const routes = [
  { path: '/', redirect: '/dashboard'},
  { path: '/auth', component: () => import('@/views/Auth'), meta: { requiresUnauth: true },
    children: [
      { path: 'login', component: () => import('@/components/auth/Login')},
      { path: 'register', component: () => import('@/components/auth/Register')}
    ], redirect: '/auth/login'},
  { path: '/dashboard', component: Home, meta: { requiresAuth: true }},
  { path: '/team', component: () => import('@/views/user/Team'), meta: { requiresAuth: true } },
  { path: '/user/:id', component: () => import('@/views/user/User'),
    children: [
      { path: 'profile', component: () => import('@/components/user/UserProfile')},
      { path: 'wishlist', component: () => import('@/components/user/UserWishlist')}
    ], redirect: 'profile', meta: { requiresAuth: true } },

    //TODO: régler le pb du redirect vers /user/:id/profile dans l'url
  { path: '/cart', component: null },
  { path: '/market', component: () => import('@/views/Market') },
  { path: '/:notFound(.*)', component: null }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active"
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.state.isAuthenticated) {
    next('/auth')
  } else if (to.meta.requiresUnauth && store.state.isAuthenticated) {
    next('/');
  }
  else next();
})


export default router
