import App from '@/App.vue'
import router from '@/router' // 路由
import store from '@/store'
import '@/styles/index.less' // 全局样式
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(store).use(router)
router.isReady().then(() => {
  app.mount('#app')
})
