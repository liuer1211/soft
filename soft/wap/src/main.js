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

import dataV from '@jiaminghi/data-view'

// import socket from './utiles/test/socketio_test';

// import './test/socket'

// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.css';
// import Swiper from "swiper/vue";
// import "swiper/swiper.min.css";
// Vue.use(Swiper)

Vue.use(Vant);
Vue.use(VideoPlayer);
Vue.use(dataV)

// Vue.prototype.$socket = socket;

Vue.config.productionTip = false

// 过滤器
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})

// import VueSocketIO from 'vue-socket.io'
// Vue.use(new VueSocketIO({
//   debug: true,// 生产环境关闭，打开可在控制台查看socket连接和事件监听的信息
//   options: {
//     autoConnect: false //创建时是否自动连接，默认关闭，使用时用open开启链接
//   },
//   connection: '192.168.106.221:8888' //链接地址
// })) 

const vm = new Vue({
  render: h => h(App),
  router,
  store,
  // sockets: {
  //   connecting() { console.log('正在连接') },
  //   connect() { console.log('连接成功') },
  //   disconnect() { console.log('断开连接') },
  //   connect_failed() { console.log('连接失败') },
  //   error() { console.log('错误发生，并且无法被其他事件类型所处理') },
  //   reconnecting() { console.log('正在重连---') },
  //   reconnect_failed() { console.log('重连失败') },
  //   reconnect() { console.log('重连成功') },
  //   welcome: data => {//全局监听订阅事件，需要与后端约定好
  //       console.log('welcome data', data)
  //   } 
  // } 
}).$mount('#app')

// console.log('vm=', vm)
// console.log('环境：',process.env.NODE_ENV)
// console.log('history=',history)