<template>
  <div>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
  </div>
</template>
<script> 
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  import { Image as VanImage } from 'vant';
  import { Swipe, SwipeItem } from 'vant';
  import { Search } from 'vant';

  import {getCalendar} from 'network/home'

  export default {
    name: "Home",
    components: {
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
      [VanImage.name]: VanImage,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Search.name]: Search,
    },
    data () {
      return {
        value: ''
      }
    },
    created(){
      getCalendar().then(res => {
        console.log(res);
      })
    },
    
  }
</script>
<style scoped>
</style>