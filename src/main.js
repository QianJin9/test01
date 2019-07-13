import Vue from 'vue'



// 2.1 我们不使用这个vue-resource的包，我们选择axios
import axios from 'axios';
axios.defaults.baseURL = 'http://www.liulongbin.top:3005';
// 这是修改Vue的原型，可以让我们使用axios和vue-resource类似，直接使用 this.$http.xxx 就可以使用了
Vue.prototype.$http = axios;


// 拦截器配置，  这是请求拦截器，所有请求发送出去之前都要走这里
axios.interceptors.request.use(function (config) {
  console.log('所有请求发出成功之前--1：', config)
  return config;
}, function (error) {
  console.log('所有请求发出 失败 之前--1：', error)
  return Promise.reject(error);
});

// 服务器响应拦截器，所有的数据返回之前 都要走这里
axios.interceptors.response.use(function (response) {
  console.log('所有成功响应 先走拦截器里--2：', response)
  return response.data;
}, function (error) {
  console.log('所有失败响应 先走拦截器里--2：', error)
  return Promise.reject(error);
});

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