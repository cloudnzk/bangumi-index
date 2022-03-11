<template>
  <div>
    <van-grid :column-num="2">
        <van-grid-item v-for="(item,index) in animes" :key="index" icon="photo-o" :text="bangumiName(item)" />
    </van-grid>
  </div>
</template>
<script>
  import { Grid, GridItem } from 'vant';

  export default {
    name:'',
    mixins: [],
    components: {
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
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
      // 如何用闭包传值，好好理解下！
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

</style>