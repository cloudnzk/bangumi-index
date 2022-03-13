<template>
  <div>
  <!-- flex 对齐方式 -->
  <van-row type="flex" justify="space-around">
    <van-col  v-for="(item,index) in bangumis" :key="index">
      <bangumi-item :bangumi-item="item"></bangumi-item>
    </van-col>
  </van-row>

  </div>
</template>
<script>
  import { Col, Row } from 'vant';
  import BangumiItem from './BangumiItem.vue'
  import { Grid, GridItem } from 'vant';
  export default {
    name: "BangumiItemList",
    components: {
        BangumiItem,
        [Col.name]: Col,
        [Row.name]: Row,
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
    },
    props:{
      bangumis: {
          type: Array,
          default(){
              return []
          }
      }
    },
    data () {
      return {}
    },
  }
</script>
<style scoped>
  
</style>