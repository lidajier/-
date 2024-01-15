import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 要记得自己重定向一下进入登陆界面，否则他会一直进入主界面，从而忽略了登录界面。
    {
      path: '/login',
      component: () => import('../login/loginPage.vue')
    },
    {
      path: '/sign',
      component: () => import('../views/EverySign.vue')
    },
    {
      path: '/hotsoptDetails',
      component: () => import('../views/HotSoptDetails.vue')
    },
    {
      path: '/',
      component: () => import('../layout/LayoutContainer.vue'),
      redirect: '/homepage',
      children: [
        { path: '/menu', component: () => import('../views/HomeMenu.vue') },
        { path: '/homepage', component: HomePage },
        { path: '/right', component: () => import('../views/HomeRight.vue') },
        { path: '/person', component: () => import('../views/HomePerson.vue') }
      ]
    }
  ]
})

export default router
