<template>
  <div class="swiper-main-cen">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <div class="swiper-main-model">
            
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-bot">
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";
export default {
  name:'swipers',
  data(){
    return{
      list:[{},{}]
    }
  },
  mounted() {
    this.getSwiperList()
  },
  methods:{
    getSwiperList(){
      this.$nextTick(() => {
        let swiper = new Swiper(".swiper", {
          effect: "coverflow",
          grabCursor: true,
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-main-cen{
  height:200px;
  position: relative;
  .swiper{
    height:200px;
  }
  .swiper-slide{
    padding:12px;
    box-sizing: border-box;
  }
  .swiper-main-model{
    background: #fff;
    height: 100%;
    border-radius: 4px;
    padding: 12px;
    box-sizing: border-box;
  }
  .swiper-bot{
    position: absolute;
    width: 100%;
    top: 140px;
    height: 20px;
    .swiper-pagination{
    }
  }
  
}
</style>