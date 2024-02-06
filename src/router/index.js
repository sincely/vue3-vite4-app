import { createRouter, createWebHashHistory } from 'vue-router'
import { BasicLayout } from '@/layouts'
import home from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: BasicLayout,
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
  ],
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
