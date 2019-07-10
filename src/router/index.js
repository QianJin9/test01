import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeContainer from '../components/layout/HomeContainer.vue'
import MemberContainer from '../components/layout/MemberContainer.vue'
import SearchContainer from '../components/layout/SearchContainer.vue'
import ShopContainer from '../components/layout/ShopContainer.vue'

var router = new VueRouter({
  routes: [
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/search',component:SearchContainer},
    {path:'/shop',component:ShopContainer}
  ],
  linkActiveClass:'mui-active'
})

export default router;