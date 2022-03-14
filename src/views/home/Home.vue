<template>
  <div>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" background="#0099FF" />
    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item v-model="day" :options="option1" @change="changeDay()" />
      <van-dropdown-item v-model="order" :options="option2" />
    </van-dropdown-menu>
    <bangumi-item-list :bangumis="bangumis"></bangumi-item-list>
  </div>
</template>
<script> 

  import BangumiItemList from 'components/content/bangumis/BangumiItemList'
  import {getCalendar} from 'network/home'

  export default {
    name: "Home",
    components: {
      BangumiItemList,
    },
    data () {
      return {
        value: '',
        bangumis: [],
        day: 0,
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
      
    },
    created(){
      // 显示今天的番组
      this.day = this.getToday();
      this.getCalendar();
      // this.getAllCalendar()
    },
    methods: {
      getCalendar(day=this.day){
        getCalendar().then(res => {
          // 保存请求过来的数据到 data 中
          this.bangumis = res.data[day - 1].items;
          // console.log(this.bangumis);
        })
      },

      getAllCalendar(){
        getCalendar().then(res => {
          // 保存请求过来的数据到 data 中
          this.bangumis = []
          for(let day of res.data){
            this.bangumis.push(...day.items)
          }
          // console.log(this.bangumis);
        })
      },

      changeDay(){
        if(this.day === 0) this.getAllCalendar()
        else  this.getCalendar()
      },
      
      // 返回今天周几
      getToday(){
        let d = new Date().getDay()
        if(d === 0) return 7;
        else  return d;
      },

    }
  }
</script>
<style scoped>
</style>