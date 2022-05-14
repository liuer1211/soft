<template>
  <div class="kungfu-main">
    <!-- 背景 -->
    <div class="bg"></div>
    <!-- 下层 -->
    <div class="bot">
      <div class="animate">
        燕云七绝 燕云七绝燕云七绝燕云七绝燕云七绝燕云七绝燕云七绝
      </div>
    </div>
    <!-- 上层 -->
    <div class="top"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.$route.params.data)
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
  .kungfu-main {
    >div{
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .bg {
      z-index: 1;
      background: linear-gradient(to top, #171717, #505050);
    }
    .bot {
      z-index: 2;
      color: #f2d64dee;
      >div {
        // writing-mode: vertical-lr;
        // position: absolute;
        // top: 0;
        width: 100%;
        overflow: hidden;
      }
    }
    .top {
      z-index: 3;
    }
    .animate {
      animation: 7s wordsLoop linear infinite normal;
    }
  }
  @keyframes wordsLoop {
    0% {
      // left: 0;
      transform: translateX(100%);
      // opacity: 0;
    }
    50% {
      // left: 50%;
      // opacity: 1;
    }
    100% {
      // left: 100%;
      transform: translateX(-100%);
      // opacity: 0;
    }
  }
</style>