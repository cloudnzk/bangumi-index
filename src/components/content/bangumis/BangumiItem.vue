<template>
  <div class="bangumi-item">
      <van-image :src="bangumiItem.images.large"
        width="100%" 
        radius="16"
        show-error
        show-loading
      >
      </van-image>
      
      <!-- 要给标题一个宽度，不然会撑大盒子宽度 -->
      <div class="ellipsis title">{{bangumiName(bangumiItem)}}</div>
      <div class="star"><van-icon name="like" size="32" color="#fff" class="star-icon"/></div>
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
        
      }
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
    padding-top: 10px;
  }
  .star {
    display: flex;
    justify-content: flex-end;
  }
  .star-icon {
    position: absolute;
    /* 其实就是一行文字的高度，再往上偏移 */
    bottom: 32px;
    right: 4px;
  }
</style>