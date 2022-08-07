import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import { ElementTiptapPlugin } from 'element-tiptap';
// 引入 import element-tiptap 样式
import 'element-tiptap/lib/index.css';
import '@/styles/index.scss' // global css
import AComponentUI from 'acomponent-ui';

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import * as filter from './utils/type'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.use(ElementTiptapPlugin, {
  lang: 'zh', // 设置语言为中文
});
Vue.use(AComponentUI);

Vue.config.productionTip = false

Object.keys(filter).forEach((key)=>{
  Vue.filter(key, filter[key]);
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
