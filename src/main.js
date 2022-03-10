import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

// 注册懒加载组件
import { Lazyload } from 'vant';
Vue.use(Lazyload);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
