// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器

// exports.timeFormat = (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") => {
//   return moment(dataStr).format(pattern)
// }

export default function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
}
