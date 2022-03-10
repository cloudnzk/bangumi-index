<template>
  <div>
    <van-nav-bar title="首页">
      <template #left>
        <van-icon name="replay" size="18" />
      </template>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    
    <!-- 轮播图组件 -->
    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script> 
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  import { Image as VanImage } from 'vant';
  import { Swipe, SwipeItem } from 'vant';

  export default {
    name: "Home",
    components: {
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
      [VanImage.name]: VanImage,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    data () {
      return {
        images: [
          'https://img01.yzcdn.cn/vant/apple-1.jpg',
          'https://img01.yzcdn.cn/vant/apple-2.jpg',
        ],
      }
    },
  }
</script>
<style scoped>
</style>