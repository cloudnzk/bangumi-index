<template>
  <div>
  <!-- flex 对齐方式 -->
  <van-row type="flex" justify="space-around" align="bottom">
    <van-col  v-for="(item,index) in bangumis" :key="index">
      <bangumi-item :bangumi-item="item"></bangumi-item>
    </van-col>
  </van-row>

  </div>
</template>
<script>
  import BangumiItem from './BangumiItem.vue'

  export default {
    name: "BangumiItemList",
    components: {
        BangumiItem,
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