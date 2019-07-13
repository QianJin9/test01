import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);


// 导入对应的路由组件
import HomeContainer from '../components/layout/HomeContainer.vue'
import MemberContainer from '../components/layout/MemberContainer.vue'
import SearchContainer from '../components/layout/SearchContainer.vue'
import ShopContainer from '../components/layout/ShopContainer.vue'

// 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    {path: '/home', component:HomeContainer},
    {path: '/member', component:MemberContainer},
    {path: '/search', component:SearchContainer},
    {path: '/shop', component:ShopContainer}
  ],
  linkActiveClass: 'mui-active'
})

//把路由对象暴露出去
export default router;