<template>
  <div>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    <calendar :animes="animes"></calendar>
  </div>
</template>
<script> 
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  import { Image as VanImage } from 'vant';
  import { Search } from 'vant';

  import Calendar from './childComps/Calendar'
  import {getCalendar} from 'network/home'

  export default {
    name: "Home",
    components: {
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
      [VanImage.name]: VanImage,
      [Search.name]: Search,
      Calendar,
    },
    data () {
      return {
        value: '',
        animes: [],
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
          this.animes = res.data[this.today].items;
          // console.log(this.animes);
        })
      }
    }
  }
</script>
<style scoped>
</style>