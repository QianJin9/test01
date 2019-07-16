// exports.formatMoney = (value) => {
//   if (value) {
//     value = Number(value);
//     return '￥ ' + value.toFixed(2);
//   }
// };

export default function formatMoney(value){
  if (value) {
    value = Number(value);
    return '￥ ' + value.toFixed(2);
  }
}

//  导出函数一般不适用第三种写法
// function formatMoney(value){
//   if (value) {
//     value = Number(value);
//     return '￥ ' + value.toFixed(2);
//   }
// }
// export {
//   formatMoney
// }
