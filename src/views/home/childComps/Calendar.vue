<template>
  <div>
    <van-grid :column-num="2" :gutter="12">
        <van-grid-item v-for="(item,index) in animes" :key="index">
          <van-image :src="item.images.large" height="300px"/>
          <span class="bangumi-title">{{bangumiName(item)}}</span>
          <van-icon name="star-o" />
        </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
  import { Grid, GridItem } from 'vant';
  import { Image as VanImage } from 'vant';
  import { Icon } from 'vant';

  export default {
    name:'',
    mixins: [],
    components: {
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [VanImage.name]: VanImage,
        [Icon.name]: Icon,
    },
    props:{
      animes: {
          type: Array,
          default(){
              return []
          }
      }
    },
    data () {
      return {

      };
    },
    computed: {
      // 这里用了闭包传值，好好理解下！
      bangumiName(){
        return function(item){
          return item.name_cn.length === 0 ? item.name : item.name_cn
        }
      },
    },
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
    },
  }
</script>
<style scoped>
  .bangumi-title {
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }
</style>