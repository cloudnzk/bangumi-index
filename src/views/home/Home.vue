<template>
  <div>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" background="#4fc08d" />
    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <!-- <calendar :animes="bangumis"></calendar> -->
    <bangumi-item-list :bangumis="bangumis"></bangumi-item-list>
  </div>
</template>
<script> 

  // import Calendar from './childComps/Calendar'
  import BangumiItemList from 'components/content/bangumis/BangumiItemList'
  import {getCalendar} from 'network/home'

  export default {
    name: "Home",
    components: {
      // Calendar,
      BangumiItemList,
    },
    data () {
      return {
        value: '',
        bangumis: [],
        value1: 0,
        value2: 'a',
        option1: [
          { text: '全部商品', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 },
        ],
        option2: [
          { text: '默认排序', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' },
        ],
      }
    },
    computed: {
      // 返回今天周几
      today(){
        let d = new Date().getDay()
        if(d === 0) return 6;
        else  return d - 1;
      }
    },
    created(){
      this.getCalendar();
    },
    methods: {
      getCalendar(){
        getCalendar().then(res => {
          // console.log(res);
          // 保存请求过来的数据到 data 中
          // 用一个计算属性计算今天是周几
          this.bangumis = res.data[this.today].items;
          // console.log(this.bangumis);
        })
      },
      onConfirm() {
        this.$refs.item.toggle();
      },
    }
  }
</script>
<style scoped>
</style>