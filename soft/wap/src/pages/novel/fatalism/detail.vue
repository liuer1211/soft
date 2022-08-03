<template>
  <div class="peo-detail-main">
    <div class="model-main">
      <h1>{{obj.instro}}</h1>
      <div>{{obj.address}}</div>
      <div>{{obj.name}}</div>
      <p v-html="obj.descr"></p>
    </div>
    <div class="bg-main"></div>
    <!-- 右侧浮框 -->
    <!-- <RightModel></RightModel> -->
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
        code: "002",
        left: 30,
        leftTip: 28,
        name: "香楼听曲",
        title: "月与楼",
        top: 20,
        topTip: 14,
        people: '夜灵犀、苏晚',
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
      padding: 12px;
      box-sizing: border-box;
      z-index: 99;
      font-size: 15px;
      color: #000;
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
      background: #cdb58d;
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