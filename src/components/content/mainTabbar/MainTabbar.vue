<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="like-o" to="/favorites">收藏</van-tabbar-item>
  </van-tabbar>
</template>
<script>
  /**
   * 局部注册vant的Tabbar组件
   */
  import { Tabbar, TabbarItem } from 'vant';
  
  export default {
    name: "MainTabbar",
    data () {
      return {
        active: 0,
      }
    },
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    }
  }
</script>
<style scoped>
</style>