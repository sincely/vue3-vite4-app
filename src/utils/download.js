/**
 * @description 文件流转blob对象下载
 * @export downloadFile
 * @param {*} data
 * @param {*} type
 * @param {*} fileName
 */
export function downloadFile(data, type, fileName) {
  const downloadTypeMap = {
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    zip: 'application/zip',
    rar: 'application/x-rar-compressed',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    pdf: 'application/pdf'
  }
  const blob = new Blob([data], { type: downloadTypeMap[type] })
  const downloadElement = document.createElement('a')
  const href = getObjectURL(blob) // 创建下载的链接
  downloadElement.href = href
  // downloadElement.target = '_blank'
  downloadElement.download = fileName // 下载后文件名
  document.body.appendChild(downloadElement)
  downloadElement.click() // 点击下载
  document.body.removeChild(downloadElement) // 下载完成移除元素
  window.URL.revokeObjectURL(href) // 释放掉blob对象
}

/**
 * @description 文件流转换为url
 * @param {} data 文件流
 */
export const getObjectURL = function (file) {
  let url = null
  if (window.createObjectURL !== undefined) {
    // basic
    url = window.createObjectURL(file)
  } else if (window.URL !== undefined) {
    // mozilla(firefox)
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL !== undefined) {
    // webkit or chrome
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}
