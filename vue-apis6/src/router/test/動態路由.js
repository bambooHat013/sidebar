import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import navData from '@/utils/navData.js'

const routes = [
  {
    path: '/',
    component: Home
  }
];

navData.forEach(item => {
  routes.push({
    path: item.path,
    name: item.name,
    meta: { title: item.title },
    component: () => import(`../views/${item.component}.vue`)
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router