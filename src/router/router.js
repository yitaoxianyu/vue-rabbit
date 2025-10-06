import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/LayoutIndex.vue'
import Login from '@/views/Login/LoginIndex.vue'
import Home from '@/views/Home/HomeIndex.vue'
import Category from '@/views/Category/CategoryIndex.vue'
import SubCategory from '@/views/SubCategory/SubCategoryIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: '/category/:id',
          component: Category,
        },
        {
          path: '/category/sub/:id',
          component: SubCategory,
        },
      ],
    },
    {
      path: '/login',
      component: Login,
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
