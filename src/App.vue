<template>
  <div id="app">
    <!-- 保存当前状态 -->
    <keep-alive exclude="Favorites">
      <!-- 根据当前的路径，动态渲染出不同的组件. -->
      <router-view></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import MainTabbar from 'components/content/mainTabbar/MainTabbar'
  
  export default {
    name: 'App',
    components: {
      MainTabbar,
    }
  }
</script>

<style>
  @import url('./assets/css/normalize.css');
</style>
