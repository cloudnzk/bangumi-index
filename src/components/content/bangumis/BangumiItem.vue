<template>
  <div class="bangumi-item">
      <van-image :src="bangumiItem.images.large"  width="100%"/>
      <!-- <span class="bangumi-title">{{bangumiName(bangumiItem)}}</span>
      <van-icon name="star-o" /> -->
  </div>  
</template>
<script>
  import { Image as VanImage } from 'vant';
  import { Icon } from 'vant';

  export default {
    name: "BangumiItem",
    components: {
        [VanImage.name]: VanImage,
        [Icon.name]: Icon,
    },
    props:{
      bangumiItem: {
          type: Object,
          default(){
              return {}
          }
      }
    },
    data () {
      return {}
    },
    computed: {
      // 这里用了闭包传值，好好理解下！
      bangumiName(){
        return function(item){
          return item.name_cn.length === 0 ? item.name : item.name_cn
        }
      },
    },
  }
</script>
<style scoped>
</style>