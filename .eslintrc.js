const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  rules: {
    // 禁止使用多余的包
    'import/no-extraneous-dependencies': 0,
    // 确保在导入路径内一致使用文件扩展名
    'import/extensions': 0,
    // 确保导入指向可以解析的文件/模块
    'import/no-unresolved': 0,
    // 禁用console
    'no-console': 0,
    // 只强制对象解构，不强制数组解构
    'prefer-destructuring': ['error', { object: true, array: false }],

    'vue/no-unused-components': 'warn', // 禁止出现未使用的组件
    'no-multi-spaces': 'error', // 不能用多余的空格,
    'no-self-compare': 'error', // 禁止自身比较
    'no-self-assign': 'error', // 禁止自我赋值
    'no-unused-vars': 'error', // 禁止出现未使用过的变量
    'no-unreachable': 'error', //不能有无法执行的代码
    'no-empty': 'error', // 块语句中的内容不能为空
    'no-multiple-empty-lines': 'error', // 不允许有连续多行空行
    'no-lone-blocks': 'error', // 禁止不必要的嵌套块
    'no-irregular-whitespace': 'error', // 禁止在字符串和注释之外不规则的空白
    'no-return-assign': 'error', // 禁止在return语句中使用赋值语句
    'no-inner-declarations': 'error', // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-else-return': 'error', // 禁止if语句中return语句之后有else块
    'vue/multi-word-component-names': 0 // 要求组件名称总是多个单词
  }
})
