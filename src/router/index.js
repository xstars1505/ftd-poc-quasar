import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLayout from '@/views/MainLayout';
import superUserRoutes from '@/router/super-user.routes';
import endUserRoutes from '@/router/end-user.routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (
        localStorage.getItem('authenticationToken') ||
        sessionStorage.getItem('authenticationToken')
      ) {
        next('/');
      } else {
        next();
      }
    }
  },
  {
    path: '/forbidden',
    name: 'Forbidden',
    component: () => import('../views/Forbidden.vue')
  },
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home'),
        meta: { authorities: [] }
      },
      ...superUserRoutes,
      ...endUserRoutes
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
