<template>
  <div class="swiper-main-cen">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <div class="swiper-main-model">
            <img :src="getImg(item.img)" alt="">
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
  props:{
    list:{
      type: Array,
      default: ()=>([])
    }
  },
  data(){
    return{
    }
  },
  mounted() {
    this.getSwiperList()
  },
  methods:{
    getImg(img){
      return require(`../../assets/images/music/${img}`)
    },
    getSwiperList(){
      this.$nextTick(() => {
        let swiper = new Swiper(".swiper", {
          // effect: "coverflow",
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
    // background: #fff;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    // padding: 12px;
    // box-sizing: border-box;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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