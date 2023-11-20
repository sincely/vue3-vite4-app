module.exports = {
  // 由于检查代码命令是对整个项目代码有效，有时候我们只想对自己改动的代码进行检查，而忽略项目其他代码。
  // 我们可以使用lint-staged，它可以让我们执行检查命令只对git缓存区的文件有效。
  '*.{js,jsx,ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint:fix'],
  'package.json': ['prettier --write'],
  '*.{css,less}': ['stylelint:fix', 'prettier --write'],
  '{!(package)*.json,.!(browserslist)*rc}': ['prettier --write--parser json']
}
