<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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
      return {}
    },
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    }
  }
</script>
<style scoped>
</style>