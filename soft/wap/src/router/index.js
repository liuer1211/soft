import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 1. 定义路由组件.
import Home from '../pages/home/home'

const routes = [
  // 重定向
  {
    path: '*',
    redirect: '/home' 
  },
  { 
    path: '/home', 
    component: Home 
  },
]

const router = new VueRouter({
  routes
})

export default router;

