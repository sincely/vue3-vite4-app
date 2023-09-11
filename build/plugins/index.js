import vue from '@vitejs/plugin-vue'
import unplugin from './unplugin'
import mock from './mock'
import visualizer from './visualizer'
import compression from './compression'
import inspect from './inspect'
import legacy from './legacy'
import commonjs from './require'
import progress from './progress'
import vueDevTools from './vueDevtool'
import prefetchPlugin from './preload'
import webUpdateNoticePlugin from './update'
/**
 * @description  创建vite插件
 * @param viteEnv - 环境变量配置
 * @param isBuild - 是否编译
 */
export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue(), mock(viteEnv), ...unplugin(), commonjs()]
  if (isBuild) {
    vitePlugins.push(compression(), visualizer(), legacy(), progress(), webUpdateNoticePlugin())
  } else {
    vitePlugins.push(
      inspect(),
      vueDevTools(viteEnv),
      prefetchPlugin({
        pathList: ['./src/views/', './src/components/'],
        preFix: ''
      })
    )
  }
  return vitePlugins
}
