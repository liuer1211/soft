<template>
  <div class="other-main">
    <div class="other-swiper-main">
      <div class="swiper"> 
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <h1>wwww</h1>
            <div>wwww</div>
            <p>wwww
            </p>
          </div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
        </div>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";

export default {
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.$route.params.data)
    this.getInitDate();
  },
  methods:{
    getInitDate() {
      this.$nextTick(() => {
        const swiper = new Swiper(".swiper", {
          effect: 'cards', // 卡片
          cardsEffect: {
            slideShadows: true, // 阴影
          },
          grabCursor: true, // 手
          loop: true, // 循环
        });
      });
    }
  }
}
</script>

<style lang="less" scoped >
  .other-main{
    font-size: 16px;
    overflow: hidden;
    position: relative;
  }
  .other-swiper-main {
    padding: 40px 0 0 0;
    box-sizing: border-box;
    // position: absolute;
    // top: 0;
    // width: 100%;
    // height: 100%;
    // z-index: 1;
  }
  .bg {
      position: fixed;
      top:0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-color: #639cf1;
    }

  .swiper {
    width: 260px;
    height: 500px;
    z-index: 2;
  }

  .swiper-slide {
    border-radius: 6px;
    font-size: 16px;
    color: #fff;
    padding: 12px;
    box-sizing: border-box;
    background-color: #e89b0f;
  }
  
  .swiper-slide >div {
    // overflow: auto;
  }

  // .swiper-slide:nth-child(1n) {
  //   background-color: #e89b0f;
  // }

  // .swiper-slide:nth-child(2n) {
  //   background-color: rgb(0, 140, 255);
  // }

  // .swiper-slide:nth-child(3n) {
  //   background-color: rgb(10, 184, 111);
  // }

  // .swiper-slide:nth-child(4n) {
  //   background-color: rgb(211, 122, 7);
  // }

  // .swiper-slide:nth-child(5n) {
  //   background-color: rgb(118, 163, 12);
  // }

  // .swiper-slide:nth-child(6n) {
  //   background-color: rgb(180, 10, 47);
  // }

  // .swiper-slide:nth-child(7n) {
  //   background-color: rgb(35, 99, 19);
  // }

  // .swiper-slide:nth-child(8n) {
  //   background-color: rgb(0, 68, 255);
  // }

  // .swiper-slide:nth-child(9n) {
  //   background-color: rgb(218, 12, 218);
  // }

  // .swiper-slide:nth-child(10n) {
  //   background-color: rgb(54, 94, 77);
  // }
</style>