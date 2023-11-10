import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import svgLoader from 'vite-svg-loader'
export default function svgIconPlugin() {
  return [
    createSvgIconsPlugin({
      // 配置路劲在你的src里的svg存放文件
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]'
    }),
    svgLoader()
  ]
}
