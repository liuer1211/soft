<template>
  <div class="weapon-main">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../assets/images/imgmodel/001.png" />
          <div>
            <div>黑曜</div>
            <div>邪剑黑曜，旷世奇兵</div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/people/y.jpg" />
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
    };
  },
  mounted() {
    this.getInitDate();  // 悬浮------------
  },
  methods: {
    getInitDate() {
      this.$nextTick(() => {
        let swiper = new Swiper(".swiper", {
          effect: "flip",
          grabCursor: true,
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    }
  },
};
</script>

<style lang="less" scoped>
  .weapon-main {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background: linear-gradient(to top, #dfdb04, #f0f5b2);
    .swiper {
      .swiper-wrapper {
        .swiper-slide {
          position: relative;
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
            top: 16px;
            right: 56px;
            bottom: 16px;
            padding-left: 16px;
            box-sizing: border-box;
            writing-mode: vertical-rl;
            color: #fff;
            transition: .5s;
            transform: scale(.8);
          }
        }
      }
    }
    .swiper-pagination-bullets.swiper-pagination-horizontal{
      bottom: -28px;
    }
  }
</style>