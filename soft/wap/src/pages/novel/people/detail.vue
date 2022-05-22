<template>
  <div class="peo-detail-main">
    <div class="model-main">
      <h1>{{obj.name}}</h1>
      <div>{{obj.menpai}}</div>
      <div>{{obj.gongfu}}</div>
      <div>{{obj.miaoshu}}</div>
      <p>{{obj.shiji}}</p>
    </div>
    <div class="bg-main"></div>
    <!-- 右侧浮框 -->
    <RightModel></RightModel>
  </div>
</template>

<script>
import RightModel from '@/components/rightModel/rightModel'

export default {
  components: {
    RightModel
  },
  data() {
    return {
      obj: {
        name: '夜灵犀',
        menpai: '燕云山庄',
        gongfu: '燕云七绝、乾坤生死诀',
        miaoshu: '',
        shiji: '年少成名，一手绝技独步江湖。对于他的本事，江湖中人都是这样流传的“锦绣一挥，神佛难挡”。'
      }
    }
  },
  mounted() {
    console.log(this.$route.params.data);
    this.getInit();
  },
  methods:{
    // 初始数据
    getInit() {
      if (this.$route.params.data) {
        this.obj = this.$route.params.data;
      } else {
        this.$router.back();
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .peo-detail-main {
    .model-main {
      position: absolute;
      top: 0;
      // overflow: auto;
      width: 100%;
      padding: 12px 12px 0;
      box-sizing: border-box;
      z-index: 99;
      font-size: 15px;
      color: #fff;
      h1 {
        font-size: 18px;
      }
      >div {
        margin-top: 12px;
        line-height: 20px;
      }
      >p {
        margin-top: 12px;
        line-height: 24px;
        word-wrap: break-word;
        word-break: break-all;
        text-indent: 20px;
      }
    }
    .bg-main {
      overflow: hidden;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9;
      background: radial-gradient(220% 105% at top center, #0f378c 10%, #5f63d6 40%, #6f73e9 65%, #578ceb);
    }
    .img-main {
      overflow: hidden;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      background: url(../../../assets/images/people/y.jpg) no-repeat;
      background-size: 100% 100%;
      opacity: 0.2;
    }
  }
</style>