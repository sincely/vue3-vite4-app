import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout/index.vue'
import home from '@/views/home/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.VITE_BASE_URL,
  routes: [
    {
      path: '/',
      component: layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: home,
          name: 'home',
          meta: {
            title: '首页',
            keepAlive: true
          }
        }
      ]
    }
  ]
})

export default router
