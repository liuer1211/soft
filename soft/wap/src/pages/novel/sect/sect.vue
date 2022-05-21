<template>
  <div class="sect-main">
    <!-- 上 -->
    <div class="swiper mySwiper1"  >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
          <div>
            <div>燕云山庄</div>
            <div>泰山以南，云雾缭绕，日出映月</div>
          </div>
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
    <!-- 下 -->
    <div class="swiper mySwiper2">
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
      </div>
    </div>
  </div>
</template>

<script >
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
        let swiper = new Swiper(".mySwiper2", {
          // loop: true,
          spaceBetween: 10,
          slidesPerView: 4, // 同时显示的数量
          freeMode: true, // 每次滑动不止一个
          watchSlidesProgress: true, // 进度
        });
        let swiper2 = new Swiper(".mySwiper1", {
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
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(to top, #176fe5, #ffffff);
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
    background: linear-gradient( 0deg ,#176fe5,#fff);
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .mySwiper1 {
    height: 80%;
    width: 100%;
    .swiper-slide {
      position: relative;
      img {
        opacity: .9;
      }
      &.swiper-slide-active {
        >div {
          transform: scale(1);
          right: 16px;
        }
      }
      >div {
        position:absolute;
        top: 16px;
        right: 56px;
        bottom: 16px;
        padding-left: 16px;
        box-sizing: border-box;
        writing-mode: vertical-rl;
        transition: .5s;
        transform: scale(.8);
        >div {
          font-size: 18px;
          &:last-child {
            margin-right: 12px;
            color: #fff;
            padding: 12px 0 0 16px;
            box-sizing: border-box;
            letter-spacing: 1px;
            text-align: left;
            line-height: 20px;
            text-shadow: 1px 1px 4px #2c2c2c;
          }
          &:first-child {
            font-weight: 600;
            font-size: 26px;
            color: #fad20d;
            letter-spacing: 6px;
            text-align: left;
            text-shadow: 1px 1px 4px #fff;
          }
        }
      }
    }
  }
  .mySwiper2 {
    height: 20%;
    box-sizing: border-box;
    padding: 10px;
    .swiper-wrapper {
      .swiper-slide {
        border-radius: 4px;
        overflow: hidden;
      }
    }
  }
  .mySwiper2 .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.2;
  }
  .mySwiper2 .swiper-slide-thumb-active {
    opacity: 1;
  }
</style>