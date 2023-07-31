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
/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue(), mock(viteEnv), ...unplugin(), commonjs()]
  if (isBuild) {
    vitePlugins.push(compression(), visualizer(), legacy(), progress())
  } else {
    vitePlugins.push(inspect(), vueDevTools(viteEnv))
  }
  return vitePlugins
}
