import Vue from 'vue'


// 引入Mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入Mui (第三方的库放一起)
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

import './scss/app.scss'

import router from './router/index.js';


import App from './App.vue'
// 需要加载根组件到id等于app的div上面,用render的方法
var vm = new Vue({
  el: '#app',
  render: c => c(App),
  router
})