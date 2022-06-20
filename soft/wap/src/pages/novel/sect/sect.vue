<template>
  <div class="sect-main">
    <!-- 上 -->
    <div class="swiper mySwiper1"  >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <img :src="getImg(item.imgs)" />
          <div>
            <div>{{item.name}}</div>
            <div>{{item.des}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 下 -->
    <div class="swiper mySwiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="'i'+index">
          <img :src="getImg(item.imgs)" />
          <div class="bot-model">{{item.name}}</div>
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
      list: [
        {
          imgs: 'y.jpg',
          name: '燕云山庄',
          des: '四面环山，云雾缭绕，日出映月'
        },
        {
          imgs: '1.jpg',
          name: '魔教',
          des: '断崖之上，云天之巅'
        },
        {
          imgs: '2.jpg',
          name: '别离门',
          des: '幽谷寒舍，鸟语花香'
        },
        {
          imgs: '3.jpg',
          name: '正威镖局',
          des: '太湖之畔，国色天香'
        },
        {
          imgs: '3.jpg',
          name: '少林寺',
          des: '嵩山有寺，北斗之望'
        },
        {
          imgs: '3.jpg',
          name: '名剑山庄',
          des: '天下一剑，亦正亦邪'
        },
      ]
    };
  },
  mounted() {
    // 初始数据
    this.getInitDate();
  },
  methods: {
    // 初始数据
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
          // spaceBetween: 10,
          thumbs: {
            swiper: swiper,
          },
        });
      });
    },
    // 动态拼接图片地址
    getImg(data) {
      if (data) {
        let img = require(`../../../assets/images/people/${data}`)
        return img;
      }
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
    background: linear-gradient(0deg, #438aea, #92abf0);
  }
  .swiper-slide img {
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-slide .bot-model {
    position: absolute;
    font-size: 14px;
    color: #fad20d;
    writing-mode: vertical-rl;
    opacity: .3;
  }
  .swiper-slide.swiper-slide-thumb-active .bot-model{
    opacity: 1;
  }
  .mySwiper1 {
    height: 80%;
    width: 100%;
    .swiper-slide {
      position: relative;
      img {
        opacity: .9;
        display: none;
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
    opacity: 0.4;
  }
  .mySwiper2 .swiper-slide-thumb-active {
    opacity: 1;
  }
</style>