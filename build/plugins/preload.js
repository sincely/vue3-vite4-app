const fs = require('fs')
/**
 * @description  获取文件
 * @param {*}  文件路径
 * @returns {*}
 */
function getFiles(e) {
  const arr = []
  const dirents = fs.readdirSync(e, { withFileTypes: true })
  for (const dirent of dirents) {
    if (dirent.isDirectory()) arr.push(...getFiles(e + dirent.name + '/'))
    else {
      arr.push(e + dirent.name)
    }
  }
  return arr
}
// 插入加载文件脚本
/**
 * @description 插入预加载加载文件脚本
 * @export setPreLoadFile
 * @param  pathList 需要提前加载的资源目录
 * @param  preFix 项目根路径
 * @returns {*}
 */
export default function prefetchPlugin(options = { pathList: [], preFix: '' }) {
  if (options.pathList && options.pathList.length) {
    let res = []
    options.pathList.forEach((path) => {
      res = res.concat(getFiles(path))
    })
    let linkStr = `
        <script>
        setTimeout(() => {
            function preLoadSource(url){
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        console.log('预加载成功');
                    } else {
                        console.error('预加载失败');
                    }
                };
                xhr.send();
            }\n
        `
    res.forEach((item) => {
      linkStr += `preLoadSource('${options.preFix + item.substring(1)}')\n`
    })
    linkStr += '})\n</script>'
    return {
      name: 'preload-file',
      transformIndexHtml(dom) {
        return dom.replace('</body>', `${linkStr}</body>`)
      }
    }
  }
}
