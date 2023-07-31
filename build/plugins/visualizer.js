import { visualizer } from 'rollup-plugin-visualizer'

export default function visualizerPlugin() {
  return visualizer({
    gzipSize: true,
    brotliSize: true,
    emitFile: false,
    // filename: 'test.html', //分析图生成的文件名
    open: true // 如果存在本地服务端口，将在打包后自动展示
  })
}
