//对于axios进行二次封装
import axios from "axios";
import store from "@/store";
//在当前模块中引入store
//如果出现进度条没有显示：一定是你忘记了引入样式了
//底下的代码也是创建axios实例
let baseURL = "/api";

let requests = axios.create({
  //基础路径
  baseURL: process.env.NODE_ENV === 'development' ? baseURL : 'http://180.76.106.221:8001/',
  //请求不能超过5S
  timeout: 5000,
  // contentType: 'application/x-www-form-urlencoded'
  // headers: {
  //   "Content-Type": 'multipart/form-data'
  // }
});

//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
  store.commit('getLoading', true)
  // console.log(config)
  // let {data} = {...config}
  // debugger
  // data = JSON.stringify(data)
  // config.data = data;
  if(config.method == 'post'){
    let data = new FormData();
    for(let k in config.data) data.append(k, config.data[k]);
    config.data = data;
  }
  return config;
});

//响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
  (res) => {
    // console.log(res)
    store.commit('getLoading', false)
    return res.data;
  },
  (err) => {
    store.commit('getLoading', false)
    // alert("服务器响应数据失败");
  }
);
//最终需要对外暴露（不对外暴露外面模块没办法使用）
//这里的代码是暴露一个axios实例
export default requests;
