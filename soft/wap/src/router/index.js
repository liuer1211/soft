import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 1. 定义路由组件.
import Home from '../pages/home/home'
import Novel from '../pages/novel/novel'

const routes = [
  // 重定向
  {
    path: '*',
    redirect: '/home' 
  },
  { 
    name: 'home',
    path: '/home', 
    component: Home 
  },
  { 
    name: 'novel',
    path: '/novel', 
    component: Novel 
  },
]

const router = new VueRouter({
  routes
})

export default router;

