//对于axios进行二次封装
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter);
// import router from 'vue-router';
import router from '../router';
import axios from "axios";
import store from "@/store";
import qs from 'qs';
import { Toast } from 'vant';

//在当前模块中引入store
//如果出现进度条没有显示：一定是你忘记了引入样式了
//底下的代码也是创建axios实例
let baseURL = "/api";

let requests = axios.create({
  //基础路径
  baseURL: process.env.NODE_ENV === 'development' ? baseURL : 'http://180.76.106.221:8002/',
  //请求不能超过5S
  timeout: 5000,
  headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }
});

//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
  store.commit('getLoading', true)
  // console.log(process.env.NODE_ENV,config.data)
  config.data = qs.stringify(config.data);
  return config;
});

//响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
  (res) => {
    // console.log(res)
    store.commit('getLoading', false)
    let {data = {}}=res;
    // 无权限
    if(!data.responseCode || data.responseCode==="9999"){
      router.push({path: '/login'})
      return;
    } else {
      return data;
    }
  },
  (err) => {
    console.log('err====',err)
    Toast.fail('接口异常');
    store.commit('getLoading', false)
    // alert("服务器响应数据失败");
  }
);
//最终需要对外暴露（不对外暴露外面模块没办法使用）
//这里的代码是暴露一个axios实例
export default requests;
