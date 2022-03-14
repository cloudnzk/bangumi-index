<template>
  <div class="bangumi-item">
      <van-image :src="bangumiItem.images.large"
        width="100%" 
        radius="16"
        show-error
        show-loading
      >  
      <van-icon name="like" size="32" color="#fff" class="star-icon"/>
      </van-image>
      
      <!-- 要给标题一个宽度，不然会撑大盒子宽度 -->
      <div class="ellipsis title">{{bangumiName(bangumiItem)}}</div>
      <div class="ranking">
        <van-rate
        v-model="value"
        :size="16"
        color="#ffac2d"
        void-icon="star"
        void-color="#eee"
        class="score" />
        {{bangumiItem.score}}分
      </div>
      <!-- <div>{{bangumiItem.rating.score}}</div> -->
  </div>  
</template>
<script>

  export default {
    name: "BangumiItem",
    components: {

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
      return {
        value: 3,
      }
    },
    computed: {
      // 这里用了闭包传值，好好理解下！
      bangumiName(){
        return function(item){
          return item.name_cn.length === 0 ? item.name : item.name_cn
        }
      },
      // bangumiScore(){
      //   return function(item){
      //     return item.rating.score != null ? item.rating.score : 0
      //   }
      // }
    },
  }
</script>
<style scoped>
  .bangumi-item{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 175px;
    margin-top: 10px;
  }
  
  .ellipsis {
    white-space: nowrap;
    /*2.超出的部分隐藏*/
    overflow: hidden;
    /*3.文字用省略号替代超出的部分*/
    text-overflow: ellipsis;
  }
  .title {
    padding: 10px 0 5px 0;
  }
  .star {
    display: flex;
    justify-content: flex-end;
  }
  .star-icon {
    position: absolute;
    /* 其实就是一行文字的高度，再往上偏移 */
    bottom: 0px;
    right: 4px;
  }
  .score {
    margin-right: 10px;
  }
  .ranking {
    /* position: absolute;
    bottom: 0;
    left: 0; */
    color: #ffac2d;
  }
</style>