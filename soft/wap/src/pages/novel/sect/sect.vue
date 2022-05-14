<template>
  <div class="sect-main">
    <div
      class="swiper mySwiper2"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
      </div>
    </div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.getInitDate();  // 悬浮------------
  },
  methods: {
   getInitDate() {
      this.$nextTick(() => {
        
        let swiper = new Swiper(".mySwiper", {
          // loop: true,
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true,
        });
        let swiper2 = new Swiper(".mySwiper2", {
          // loop: true,
          spaceBetween: 10,
          thumbs: {
            swiper: swiper,
          },
        });
    
      });
    }
  },
};
</script>

<style lang="less" scoped>
  .sect-main {
    position: relative;
          height: 100%;
  }
  .swiper {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      // body {
      //   background: #000;
      //   color: #000;
      // }

      .swiper {
        width: 100%;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
      }

      .swiper-slide {
        background-size: cover;
        background-position: center;
      }

      .mySwiper2 {
        height: 80%;
        width: 100%;
      }

      .mySwiper {
        height: 20%;
        box-sizing: border-box;
        padding: 10px 0;
      }

      .mySwiper .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
      }

      .mySwiper .swiper-slide-thumb-active {
        opacity: 1;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
</style>