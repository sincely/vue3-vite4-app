import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetChinese from 'unocss-preset-chinese'
import presetEase from 'unocss-preset-ease'
import antdUnoTheme from './themes/antd-uno-theme.json'

export default defineConfig({
  exclude: ['node_modules', 'dist', '.git', '.husky', '.vscode', 'public', 'build', 'mock', './stats.html'],
  presets: [
    // 默认预设（现在相当于@unocss/preset-wind）
    // m-10 理解为 margin:10rem 或者 m-10px 理解为 margin:10px
    presetUno(),
    // 为其他预设和规则提供属性模式
    // 归因模式 bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" 背景颜色的简写
    // 也可以再元素上不加class 直接写属样式 例如 < div m - 2 p - 10 bg-000 ></div >
    presetAttributify(),
    presetChinese(),
    presetEase(),
    // 使用任何图标作为类实用程序
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: { display: 'inline-block', 'vertical-align': 'middle' }
    }),
    // 排版预设 详细排版看https://unocss.dev/presets/typography#colors 使用这个前两个必须
    presetTypography(),
    // 使用任何Web字体作为类实用程序
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    }),
    // 这里看个人需求是否要使用px，默认unocss默认是rem 转换成 px单位
    presetRemToPx({
      // 将rem转换为px（ 1rem = n px ）的基本字体大小。
      // 基准字体大小  官方的默认预设（1单位 = 0.25rem） html的字体是16  所以这里为4
      baseFontSize: 16
    })
  ],
  transformers: [transformerAttributifyJsx(), transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    // 这里可以放全局公共样式
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'i-flex-center': 'inline-flex justify-center items-center',
    'i-flex-x-center': 'inline-flex justify-center',
    'i-flex-y-center': 'inline-flex items-center',
    'flex-col': 'flex flex-col',
    'flex-col-stretch': 'flex-col items-stretch',
    'i-flex-col': 'inline-flex flex-col',
    'i-flex-col-stretch': 'i-flex-col items-stretch',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    // 以下为绝对定位
    'absolute-lt': 'absolute left-0 top-0',
    'absolute-lb': 'absolute left-0 bottom-0',
    'absolute-rt': 'absolute right-0 top-0',
    'absolute-rb': 'absolute right-0 bottom-0',
    'absolute-tl': 'absolute-lt',
    'absolute-tr': 'absolute-rt',
    'absolute-bl': 'absolute-lb',
    'absolute-br': 'absolute-rb',
    'absolute-center': 'absolute-lt flex-center wh-full',
    'fixed-lt': 'fixed left-0 top-0',
    'fixed-lb': 'fixed left-0 bottom-0',
    'fixed-rt': 'fixed right-0 top-0',
    'fixed-rb': 'fixed right-0 bottom-0',
    'fixed-tl': 'fixed-lt',
    'fixed-tr': 'fixed-rt',
    'fixed-bl': 'fixed-lb',
    'fixed-br': 'fixed-rb',
    'fixed-center': 'fixed-lt flex-center wh-full',
    'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
    'ellipsis-text': 'nowrap-hidden text-ellipsis',
    'transition-base': 'transition-all duration-300 ease-in-out'
  },
  theme: {
    ...antdUnoTheme
  },
  rules: [
    [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
    ['card-shadow', { 'box-shadow': '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017' }],
    [(/^m-(\d)$/, ([, d]) => ({ margin: `${d / 4}rem` }))],
    [/^p-(\d)$/, (match) => ({ padding: `${match[1] / 4}rem` })]
  ]
})
