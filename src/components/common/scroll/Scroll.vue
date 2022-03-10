<template>
  <!-- ref 如果是绑定在组件中的，那么通过this.$refs.refname 获取到的是一个组件对象-->
  <!-- ref 如果是绑定在普通的元素中，那么通过this.$refs.refname 获取到的是一个元素对象-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        props: {
          probeType: {
            type: Number,
            default: 0
          },
          pullUpLoad: {
            type: Boolean,
            default: false
          }
        },
        data() {
            return {
                scroll: null
            };
        },
        mounted(){
            /* 1.创建BScroll对象 */
            // 为什么不用document.querySelector('.content')？
            // 因为项目可能存在同类名的元素，可能会拿错
            this.scroll = new BScroll(this.$refs.wrapper,{
                // BetterScroll 默认会阻止浏览器的原生 click 事件。
                click: true,
                // 根据业务场景指定，来决定是否实时监听。对页面的性能有影响.
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            })
            
            /* 2.监听滚动的位置，on：Better-scroll的API */
            if(this.probeType === 2 || this.probeType === 3){
              this.scroll.on('scroll', (position) => {
                // console.log(position);
                this.$emit('scroll', position)
              })
            }
            
            
            /* 3.监听scroll滚动到底部 */
            if(this.pullUpLoad){
              this.scroll.on('pullingUp',() => {
                // console.log('上拉加载更多');
                this.$emit('pullingUp')
              })
            }
            
        },
        methods: {
          scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
          },
          finishPullUp(){
            this.scroll.finishPullUp()
          },
          refresh(){
            /* 判断scroll对象存不存在
            *  因为首页的数据有可能加载得很快，this.scroll还没创建好 */
            this.scroll && this.scroll.refresh()
          },
          getCurrentY(){
            return this.scroll ? this.scroll.y : 0
          }
        },
    };
</script>
<style scoped>
</style>