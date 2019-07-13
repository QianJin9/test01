<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>


<script>
export default {
  data() {
    return {
      lunbotuList: [] // 保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // 获取轮播图数据的方法
      // 配置了全局的请求根路径，所有的请求后面也不用写了
      this.$http.get("/api/getlunbo").then(result => {
        // 一定注意这里，我们换了axios的库，result不是body属性了，而是data属性
        // 我们在响应拦截器里面做了配置，返回的就是data数据，直接使用即可
        // console.log(result);
        if (result.status === 0) {
          // 成功了
          this.lunbotuList = result.message;
        } else {
          // 失败的
          Toast("加载轮播图失败。。。");
        }
      });
    }
  }
};
</script>
