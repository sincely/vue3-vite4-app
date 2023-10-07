// 每次使用图片都得import，可以借助 vite-plugin-vue-images 来实现自动导入图片
import ViteImages from 'vite-plugin-vue-images'
export default function imagesPlugin() {
  return ViteImages({
    dirs: ['src/assets/image'], // 指明图片存放目录
    // valid image extensions
    extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'],
    // Override default behavior of name -> image path resolution
    customResolvers: [],
    // Override Regex that searches for variables to replace. MUST include group
    customSearchRegex: '([a-zA-Z0-9]+)'
  })
}
