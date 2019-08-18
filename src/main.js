// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/iconfont/iconfont.styl'
import { Tabbar, TabbarItem, Icon, Cell } from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Cell);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})