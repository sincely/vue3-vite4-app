// 每次使用图片都得import，可以借助 vite-plugin-vue-images 来实现自动导入图片
import ViteImages from 'vite-plugin-vue-images'
export default function imagesPlugin() {
  return ViteImages({
    dirs: ['src/assets/images'], // 指明图片存放目录
    extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'], // 指明图片格式
    customResolvers: [], // 自定义解析器
    customSearchRegex: '([a-zA-Z0-9]+)' // 自定义正则
  })
}
