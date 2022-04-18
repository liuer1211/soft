import Vue from 'vue'
import App from './App.vue'

import router from './router'
import 'amfe-flexible';

import Vant from 'vant';
import 'vant/lib/index.css';

import VideoPlayer from 'vue-video-player';
import 'vue-video-player/src/custom-theme.css';
import 'video.js/dist/video-js.css';

import '@/mock';

Vue.use(Vant);
Vue.use(VideoPlayer);

Vue.config.productionTip = false

const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

console.log('vm=', vm)
console.log('环境：',process.env.NODE_ENV)
console.log('history=',history)