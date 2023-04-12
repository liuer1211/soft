<template>
  <div class="user-main">
    <!-- 天气 -->
    <div class="user-top">
      <Echar/>
    </div>
    <!-- 用户信息 -->
    <div>

    </div>

    <!-- 天气

    头像

    ip

    游客 -->
  </div>
</template>

<script>
  import Echar from '@/components/echar'
  export default {
    components: {
      Echar
    },
    data() {
      return {
        weathObj:{},
        weather: {}, // 天气
        city: '', // 城市
      }
    },
    created() {
      // this.getLocal();
    },
    methods:{
      // // 获取天气
      // getWeather(city) {
      //   return new Promise((resolve,reject)=>{
      //     axios.get(`/weather_mini?city=${city}`).then((response)=>{
      //       let res = response.data.data;
      //       resolve(res);
      //     }).catch((err)=>{
      //       console.log(err);
      //       reject(err);
      //     });
      //   })
      // },
      // // 获取地理位置
      // getLocal() {
      //   AMap.plugin("AMap.Geolocation", () => {
      //     var geolocation = new AMap.Geolocation({
      //       // 是否使用高精度定位，默认：true
      //       enableHighAccuracy: true,
      //       // 设置定位超时时间，默认：无穷大
      //       timeout: 10000,
      //     });
      //     geolocation.getCityInfo(async (status, result) => {   //只能获取当前用户所在城市和城市的经纬度
      //       if (status == "complete") {
      //         this.city = result.city;
      //         console.log("result",result.city)
      //         this.weather = await this.getWeather(this.city);
      //         console.log("result", this.weather)
      //       }
      //     })
      //     geolocation.getCurrentPosition((status, result) => {  //获取用户当前的精确位置
      //       if (status == "complete") {
      //         // console.log("result",result)
      //       }
      //     })
      //   })
      // }
    }
  }
</script>

<style lang="less" scoped>
  .user-main{
    .user-top{
      background: #85aaee;
    }
  }
</style>