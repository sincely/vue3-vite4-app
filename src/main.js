import App from '@/App.vue'
import store from '@/store'
import router from '@/router' // 路由
import '@/styles/index.less' // 全局样式
async function setupApp() {
  const app = createApp(App)
  app.use(store)
  app.use(router)
  app.mount('#app')
  app.config.performance = true
}

setupApp()
