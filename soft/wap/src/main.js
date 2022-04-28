import Vue from 'vue'
import App from './App.vue'

import router from './router'
import 'amfe-flexible'; // px适配
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

import VideoPlayer from 'vue-video-player';
import 'vue-video-player/src/custom-theme.css';
import 'video.js/dist/video-js.css';

import '@/mock';

// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.css';
// import Swiper from "swiper/vue";
// import "swiper/swiper.min.css";
// Vue.use(Swiper)

Vue.use(Vant);
Vue.use(VideoPlayer);


Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

console.log('vm=', vm)
console.log('环境：',process.env.NODE_ENV)
console.log('history=',history)