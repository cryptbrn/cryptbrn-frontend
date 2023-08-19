import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Muhammad Reyhan - Cryptbrn'
      },
      component: HomeView
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = <string>to.meta.title;
  next();
});

export default router
