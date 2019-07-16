<template>
  <div>
    <h3>衣服的价格：{{num | formatMoney}}</h3>
    <p>测试手机</p>
  </div>
</template>

<script>

  export default {
    created(){
      
    },
    data(){
      return {
        num: 12
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
