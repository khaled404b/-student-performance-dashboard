import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DashboardView from '../views/DashboardView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
  },
  // Add more routes as needed
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
