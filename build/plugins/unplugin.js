import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite' // 自动导入

export default function createVitePlugins() {
  return [
    AutoImport({
      imports: ['vue', 'vue-router'],
      include: [/\.[tj]sx?$/, /\.vue$/], // 匹配的文件，也就是哪些后缀的文件需要自动引入
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: false, // 会在根目录生成auto-imports.d.ts，里面可以看到自动导入的api
      // 解析器配置
      resolvers: [], // 第三方ui
      // 根据项目情况配置eslintrc，默认是不开启的
      // 下面两个是其他配置，默认即可
      // 输出一份json文件，默认输出路径为./.eslintrc-auto-import.json
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json', // @default './.eslintrc-auto-import.json'
        globalsPropValue: true // @default true 可设置 boolean | 'readonly' | 'readable' | 'writable' | 'writeable'
      }
    }),
    Components({
      dirs: ['src/components'], // 指定组件位置，默认是src/components
      // ui库解析器
      // resolvers: [ElementPlusResolver()],
      extensions: ['vue'],
      // 配置文件生成位置
      dts: false // 会在根目录生成./components.d.ts，里面可以看到自动导入的api
    })
  ]
}
