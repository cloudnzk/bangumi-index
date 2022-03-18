<template>
  <div class="bangumi-item">
      <van-image :src="bangumiItem.images.large"
        width="100%"
        height="250"
        radius="16"
        fit="cover"
        show-error
        show-loading
      >  
      <van-icon name="like" 
        size="32" 
        :badge="bangumiItem.star" 
        class="star-icon" 
        @click="starBangumi"
        :class="star" 
        ref="icon"/>
      </van-image>
      
      <!-- 要给标题一个宽度，不然会撑大盒子宽度 -->
        <div class="ellipsis title">{{bangumiItem.name}}</div>
        <div class="ranking">
          <van-rate
          v-model="value"
          :size="16"
          allow-half
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
        value: 0,
        isStar: false,
      }
    },
    computed: {
      // 这里用了闭包传值
      bangumiName(){
        return function(item){
          return item.name_cn.length === 0 ? item.name : item.name_cn
        }
      },
      star(){
        if(localStorage.getItem(this.bangumiItem.id)) this.isStar = true;
        return {
          active: this.isStar
        }
      }
    },
    created() {
      this.value = this.bangumiScore()
    },
    methods: {
      bangumiScore(){
        return this.bangumiItem.score / 2;
      },

      starBangumi(){
        // 第二个参数必须是字符串，所以先将对象转换成json
        // localStorage.clear()
        if(localStorage.getItem(this.bangumiItem.id)){
          localStorage.removeItem(this.bangumiItem.id);
          this.isStar = false;
        }
        else{
          localStorage.setItem(this.bangumiItem.id,JSON.stringify(this.bangumiItem));
          this.isStar = true;
        }
      },
    }
  }
</script>
<style scoped>
  .bangumi-item{
    position: relative;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
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
    right: 14px;
    color: #fff;
  }
  .active {
    color: red;
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