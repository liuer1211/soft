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
    component: Novel,
  },
  { 
    name: 'people',
    path: '/people', 
    component: () => import("@/pages/novel/people/people")
  },
  { 
    name: 'peopleDetail',
    path: '/peopleDetail', 
    component: () => import("@/pages/novel/people/detail")
  },
  { 
    name: 'other',
    path: '/other', 
    component: () => import("@/pages/novel/other/other")
  },
  { 
    name: 'kungfu',
    path: '/kungfu', 
    component: () => import("@/pages/novel/kungfu/kungfu")
  },
  { 
    name: 'sect',
    path: '/sect', 
    component: () => import("@/pages/novel/sect/sect")
  },
  { 
    name: 'fatalism',
    path: '/fatalism', 
    component: () => import("@/pages/novel/fatalism/fatalism")
  },
  { 
    name: 'fatalismDetail',
    path: '/fatalismDetail', 
    component: () => import("@/pages/novel/fatalism/detail")
  },
  { 
    name: 'weapon',
    path: '/weapon', 
    component: () => import("@/pages/novel/weapon/weapon")
  },
  { 
    name: 'article',
    path: '/article', 
    component: () => import("@/pages/article/article")
  },
  { 
    name: 'articleDetail',
    path: '/articleDetail', 
    component: () => import("@/pages/article/articleDetail")
  },
]

//需要重写VueRouter.prototype原型对象身上的push|replace方法
//先把VueRouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写VueRouter.prototype身上的push方法了
VueRouter.prototype.push = function(location, resolve, reject) {
  //第一个形参：路由跳转的配置对象（query|params）
  //第二个参数：undefined|箭头函数（成功的回调）
  //第三个参数:undefined|箭头函数（失败的回调）
  if (resolve && reject) {
    //push方法传递第二个参数|第三个参数（箭头函数）
    //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    originPush.call(this, location, resolve, reject);
  } else {
    //push方法没有产地第二个参数|第三个参数
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function(location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

// Nginx 配置
// location /product {
//   index  index.html index.htm;
//   try_files $uri $uri/ /product /;
// }
const router = new VueRouter({
  // mode: 'history',
  // base: '/wap/',
  routes,
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    //返回的这个y=0，代表的滚动条在最上方
    return { y: 0 };
  },
})

export default router;

