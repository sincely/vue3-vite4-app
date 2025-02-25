import App from '@/App.vue'
import store from '@/store'
import router from '@/router' // 路由
import '@/styles/index.less' // 全局样式
import { setupIcon } from './plugins' // 全局注册antd图标
import { setupDirectives } from './directives' // 自定义指令
import 'uno.css'
async function setupApp() {
  const app = createApp(App)
  setupIcon(app)
  app.use(store)
  app.use(router)
  setupDirectives(app)
  app.mount('#app')
  app.config.performance = true
}

setupApp()
