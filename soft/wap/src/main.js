import Vue from 'vue'
import App from './App.vue'

import router from './router'
import 'amfe-flexible'; // px适配
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import VideoPlayer from 'vue-video-player';
import 'vue-video-player/src/custom-theme.css';
import 'video.js/dist/video-js.css';

import '@/mock';
import * as filters from '@/filter';

import socket from './utiles/test/socketio_test';

// import './test/socket'

// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.css';
// import Swiper from "swiper/vue";
// import "swiper/swiper.min.css";
// Vue.use(Swiper)

Vue.use(Vant);
Vue.use(VideoPlayer);

Vue.prototype.$socket = socket;

Vue.config.productionTip = false

// 过滤器
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})

const vm = new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

// console.log('vm=', vm)
// console.log('环境：',process.env.NODE_ENV)
// console.log('history=',history)