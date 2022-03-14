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
        else return this.bangumis[this.currentDay - 1];
      }
    },
    created(){
      // 默认显示今天的番组
      this.currentDay = this.getCurrentDay();
      this.getCalendar();
    },
    mounted(){
      this.precessScore();
    },
    methods: {
      /**
       * 1. 获取数据的方法
       */
      getCalendar(){
        getCalendar().then(res => {
          // 保存请求过来的数据到 data 中
          // this.bangumis = res.data[this.currentDay].items;
          // console.log(this.bangumis);
          for(let obj of res.data){
            this.bangumis.push(new Calendar(obj.items))
            this.allBangumis.push(...obj.items)
          }
        })
      },
    
      precessScore(){
        this.bangumis.map(item => {
          
        })
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