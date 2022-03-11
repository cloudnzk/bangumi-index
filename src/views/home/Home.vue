<template>
  <div>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    <!-- <calendar :animes="bangumis"></calendar> -->
    <bangumi-item-list :bangumis="bangumis"></bangumi-item-list>
  </div>
</template>
<script> 
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  import { Image as VanImage } from 'vant';
  import { Search } from 'vant';

  import Calendar from './childComps/Calendar'
  import BangumiItemList from 'components/content/bangumis/BangumiItemList'
  import {getCalendar} from 'network/home'

  export default {
    name: "Home",
    components: {
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
      [VanImage.name]: VanImage,
      [Search.name]: Search,
      Calendar,
      BangumiItemList,
    },
    data () {
      return {
        value: '',
        bangumis: [],
        today: 0,
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
      }
    }
  }
</script>
<style scoped>
</style>