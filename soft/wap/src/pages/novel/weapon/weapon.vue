<template>
  <div class="weapon-main">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <div @click.stop="item.active = !item.active" :class="{active:item.active}">
            <div>
              <img :src="getImg(item.imgs)" />
              <div>
                <div>{{item.name}}</div>
              </div>
            </div>
            <div>
              <div>{{item.des}}</div>
            </div>
            <div>
              <i class="iconfont icon-exchangerate"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";

export default {
  data() {
    return {
      active: false,
      list: [
        {
          name: '黑曜', 
          imgs: 'sect/1.png', 
          des: '邪剑黑曜，旷世奇兵', 
          active: false
        },
        {
          name: '银枪', 
          imgs: 'sect/2.png', 
          des: '百鸟朝凤，惊艳一枪', 
          active: false
        }
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
        let swiper = new Swiper(".swiper", {
          effect: "coverflow",
          grabCursor: true,
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
    // 动态拼接图片地址
    getImg(data) {
      if (data) {
        let img = require(`../../../assets/images/${data}`)
        return img;
      }
    }
  },
};
</script>

<style lang="less" scoped>
  .weapon-main {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: linear-gradient(to top, #dfdb04, #f0f5b2);
    .swiper {
      width: 100%;
      height: 100%;
      padding: 20px 20px 50px;
      box-sizing: border-box;
      .swiper-wrapper {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
        .swiper-slide {
          position: relative;
          >div {
            position: relative;
            width: 100%;
            height: 100%;
            transition: 1s;
            border-radius: 4px;
            overflow: hidden;
            cursor: pointer;
            &.active {
              transform: rotateY(180deg);
              >div:nth-child(1) {
                display: none;
              }
              >div:nth-child(2) {
                display: block;
              }
              >div:nth-child(3) {
                left: initial;
                right: 0;
              }
            }
            >div:nth-child(1) {
              width: 100%;
              height: 100%;
              display: block;
              // background-color: #dab22f;
              background-color: rgba(255, 255, 255, 0.25);
              backdrop-filter: blur(6px);
              border: 1px solid rgba(255, 255, 255, 0.18);
              box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                border-radius: 4px;
                box-shadow: 1px 1px 1px 1px #efe58e;
              }
              >div {
                position:absolute;
                top: 20px;
                right: 20px;
                writing-mode: vertical-rl;
                color: #fff;
                padding: 7px;
                box-sizing: border-box;
                font-size: 16px;
                background-color: #00000085;
                border-radius: 2px;
                border: 1px solid #5e5e5e;
              }
            }
            >div:nth-child(2) {
              width: 100%;
              height: 100%;
              transform: rotateY(540deg);
              // background-color: #dab22f;
              background-color: rgba(255, 255, 255, 0.25);
              backdrop-filter: blur(6px);
              border: 1px solid rgba(255, 255, 255, 0.18);
              box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
              display: none;
              >div {
                position:absolute;
                top: 20px;
                right: 20px;
                writing-mode: vertical-rl;
                color: #000;
              }
            }
            >div:nth-child(3) {
              position: absolute;
              left: 0;
              top: 0;
              width: 40px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              i {
                color: #000000;
                font-size: 20px;
              }
            }
          }
        }
      }
    }
    .swiper-pagination-bullets.swiper-pagination-horizontal{
      bottom: 18px;
    }
  }
</style>