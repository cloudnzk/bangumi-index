import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import { Image as VanImage } from 'vant';
import { Icon } from 'vant';
import { Grid, GridItem } from 'vant';
import { Col, Row } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { Search } from 'vant';
import { Lazyload } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Overlay } from 'vant';

Vue.use(Lazyload).use(VanImage).use(Icon).use(Grid).use(GridItem).
  use(Col).use(Row).use(Tabbar).use(TabbarItem).use(NavBar).use(Search)
  .use(DropdownMenu).use(DropdownItem).use(Overlay);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
