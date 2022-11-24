import Vue from 'vue'
import App from './App.vue'

import router from './router'
import 'amfe-flexible'; // px适配
import Vant from 'vant';
import 'vant/lib/index.css';



import * as filters from '@/filter';

Vue.use(Vant);


Vue.config.productionTip = false

// 过滤器
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})

const vm = new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

// console.log('vm=', vm)
// console.log('环境：',process.env.NODE_ENV)
// console.log('history=',history)