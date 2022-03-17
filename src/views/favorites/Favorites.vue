<template>
  <div>
    <bangumi-item-list :bangumis="bangumis"></bangumi-item-list>
  </div>
</template>
<script>
  import BangumiItemList from 'components/content/bangumis/BangumiItemList'
  export default {
    name: "Favorites",
    components: {
      BangumiItemList,
    },
    data () {
      return {}
    },
    computed: {
      bangumis(){
        let starList = [];
        for(let i = 0; i < localStorage.length - 1; i++){
          let key = localStorage.key(i);
          // key是番组ID，才取
          if((/^[0-9]+$/i).test(key)){
            starList.push(JSON.parse(localStorage.getItem(key)));
          }
        }
        return starList;
      }
    }
  }
</script>
<style scoped>
</style>