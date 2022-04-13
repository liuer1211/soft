<template>
  <div class="right-model-main">
    <div class="right-model-one pos" :class="status" @click.stop="toShow">
      <!-- <van-icon name="guide-o" /> -->
    </div>
    <div class="model-top pos" :class="active1" @click.stop="topOrBack('1')">
      <!-- <van-icon name="back-top" /> -->
    </div>
    <div class="model-back pos" :class="active2" @click.stop="topOrBack('2')">
      <!-- <van-icon name="revoke" /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'start', // start 全显示； cen 半显示； end 隐藏
      timer: '',
      timers: '',
      active1: 'hide', // show 显示； hide 隐藏
      active2: 'hide', // show 显示； hide 隐藏
    }
  },
  mounted() {
    // 浮框变化
    this.changeModel();
  },
  methods:{
    // 展示返回和上滑
    toShow() {
      this.active1 = 'show';
      this.active2 = 'show';
      this.status = 'end';
      // if (document.documentElement.scrollTop > 50) {
      //   this.active1 = 'show';
      // }
      clearTimeout(this.timer);
      clearTimeout(this.timers);
      this.timers = setTimeout(()=>{
        this.status = 'cen';
        this.active1 = 'hide';
        this.active2 = 'hide';
      },2000)
    },
    // 浮框变化
    changeModel() {
      this.timer = setTimeout(()=>{
        this.status = 'cen';
      },1000)
    },
    // 1上滑；2返回
    topOrBack(code) {
      if (code === '1') {
        // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(window.pageYOffset) // xx
        // console.log(document.documentElement.scrollTop) // xx
        // console.log(document.body.scrollTop) // 0
        document.documentElement.scrollTop = 0;
        clearTimeout(this.timers)
        this.timers = setTimeout(()=>{
          this.status = 'cen';
          this.active1 = 'hide';
          this.active2 = 'hide';
        },1000)
      } else {
        this.$router.go(-1);
      }
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
    clearTimeout(this.timers)
  }
}
</script>

<style lang="less" scoped>
  .right-model-main {
    .pos {
      position: fixed;
      right: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 4px;
      box-sizing: border-box;
      cursor: pointer;
      transition: .8s;
    }
    .right-model-one {
      bottom: 50%;
      background-color: #ffc800;
      // /deep/ .van-icon{
      //   position: absolve;
      //   top: 0;
      // }
      &.start{
        right: 0;
      }
      &.cen{
        right: -15px;
      }
      &.end{
        right: -30px;
      }
    }
    .model-top {
      bottom: 55%;
      background-color: #27a442;
      &.show {
        right: 0;
      }
      &.hide {
        right: -30px;
      }
    }
    .model-back {
      bottom: 45%;
      background-color: #5e0fb8;
      &.show {
        right: 0;
      }
      &.hide {
        right: -30px;
      }
    }
  }
</style>