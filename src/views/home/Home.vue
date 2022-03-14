<template>
  <div>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" background="#0099FF" />
    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item v-model="currentDay" :options="option1" />
      <van-dropdown-item v-model="order" :options="option2"/>
    </van-dropdown-menu>
    <bangumi-item-list :bangumis="showBangumis"></bangumi-item-list>
  </div>
</template>
<script> 

  import BangumiItemList from 'components/content/bangumis/BangumiItemList'
  import {getCalendar,Calendar} from 'network/home'

  export default {
    name: "Home",
    components: {
      BangumiItemList,
    },
    data () {
      return {
        value: '',
        /**
         * 将周一到周日的都各自保存下来，只用一个数组存会经常读写，影响性能
         */
        bangumis: [],
        sort_bangumis: [],
        allBangumis: [],
        currentDay: 0,
        order: 'a',
        option1: [
          { text: '全部', value: 0 },
          { text: '周一', value: 1 },
          { text: '周二', value: 2 },
          { text: '周三', value: 3 },
          { text: '周四', value: 4 },
          { text: '周五', value: 5 },
          { text: '周六', value: 6 },
          { text: '周日', value: 7 },
        ],
        option2: [
          { text: '默认排序', value: 'a' },
          { text: '评分排序', value: 'b' },
          { text: '收藏排序', value: 'c' },
        ],
      }
    },
    computed: {
      showBangumis(){
        if(this.currentDay === 0) return this.allBangumis;
        else{
          // return this.bangumis[this.currentDay - 1].sort(this.compScore('score'));
          // 这里数据还没渲染好，排不了序。
          return this.sort_bangumis[this.currentDay - 1];
        }
      }
    },
    created(){
      // 默认显示今天的番组
      this.currentDay = this.getCurrentDay();
      this.getCalendar();
    },
    mounted(){
      
    },
    methods: {
      /**
       * 1. 获取数据的方法
       */
      getCalendar(){
        getCalendar().then(res => {
          // 保存请求过来的数据到 data 中
          for(let calendar of res.data){
            // 用一个map方法处理数组内每个item，抽出要展示的数据，再返回一个列表
            let items = calendar.items.map(item => {
              // 重新创建那么多对象对性能不好，试一下就地修改
              item.name = item.name_cn.length === 0 ? item.name : item.name_cn;
              item.score = item.rating == null ? 0 : item.rating.score;
              item.star = item.collection == null ? 0 : item.collection.doing;
              return item;
              // return new Calendar(item)
            })
            // 数组解构
            this.allBangumis.push(...items)
            this.bangumis.push(items)
            this.sort_bangumis.push(items.sort(this.compScore('score')))
          }
        })
      },
      /**
       * 排序方法
       */
      
      compScore(prop){
        return function(obj1,obj2){
          return obj1[prop] - obj2[prop] < 0;
        }
      },

      /**
       * 监听事件方法
       */

      // 返回今天周几
      getCurrentDay(){
        let d = new Date().getDay()
        if(d === 0) return 7;
        else  return d;
      },

    }
  }
</script>
<style scoped>
</style>