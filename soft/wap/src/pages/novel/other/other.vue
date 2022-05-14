<template>
  <div class="other-main">
    <div class="other-swiper-main">
      <div class="swiper"> 
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="other-model">
              <h1>印双人 · 六耳</h1>
              <p>
                夜微凉<br/>
                月初照<br/>
                轻舟过小桥 <br/>
                倩影泛波光<br/>
                仙衣衬玉指 朱唇配红妆<br/>
                举止带娇羞 柔情两相望<br/>
                当时情 最是牵人肠<br/>
                怀中酒 难解旧时伤<br/><br/>

                意向

                <!-- 回望远 情难解<br/> -->
                思念终是无尽头<br/>
                初见便已忘不了<br/>
                <!-- 待几时 共相守<br/> -->
                好山好水两相傍<br/>
                轻舟晓雾印双人<br/><br/>

                风作响<br/>
                柳轻扬<br/>
                刀剑掠残影<br/>
                眉宇现寒光<br/>
                江湖 风霜<br/>
                腥风血雨 岁月显沧桑<br/>
                挥袖间 斩断江湖事<br/>
                转身去 隐于尘世间<br/><br/>

                回望远 情难解<br/>
                思念终是无尽头<br/>
                初见便已忘不了<br/>
                待几时 共相守<br/>
                重山美景皆不是<br/>
                轻舟晓雾印双人
              </p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="other-model">
              <h1>落日有感 · 六耳</h1>
              <p>
                饭后屋顶歇，离别故园久。<br/>
                迎面凉风拂，不觉已入秋。<br/>
                落日照大地，余晖暖山丘。<br/>
                人生多坎坷，美景不长留。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg"></div>
    <!-- 右侧浮框 -->
    <RightModel></RightModel>
  </div>
</template>

<script>
import RightModel from '@/components/rightModel/rightModel'
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";

export default {
  components: {
    RightModel
  },
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
    h1{
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    text-align: center;
  }
  .other-model {
    position: absolute;
    left: 0;
    right: 0;
    top: 12px;
    z-index: 99;
    overflow-y: auto;
    bottom: 12px;
  }
  .other-swiper-main {
    padding: 40px 0 0 0;
    box-sizing: border-box;
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
      background-color: #e0b307;
    }

  .swiper {
    width: 280px;
    height: 550px;
    z-index: 2;
  }

  .swiper-slide {
    border-radius: 6px;
    font-size: 16px;
    color: #fff;
    padding: 12px;
    box-sizing: border-box;
    background-color: #454545;
    overflow: hidden;
    line-height: 22px;
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