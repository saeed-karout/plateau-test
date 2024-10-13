// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue' // تأكد من وجود هذا الملف
import OurWorkView from '@/components/our-work/OurWork.vue'
// import BlogView from '../views/BlogView.vue' // تأكد من إنشاء هذا الملف
// import ContactView from '../views/ContactView.vue' // تأكد من إنشاء هذا الملف

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView
  // },

  {
    path: '/our-work',
    name: 'our-work',
    component: OurWorkView
  },
  // {
  //   path: '/blog',
  //   name: 'blog',
  //   component: BlogView
  // },
  // {
  //   path: '/contact',
  //   name: 'contact',
  //   component: ContactView
  // },
  // يمكنك إضافة المزيد من المسارات هنا حسب الحاجة
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
