<template>
  <div class="right-model-main">
    <div class="right-model-one pos" :class="status" @click.stop="toShow">
      <i class="iconfont icon-double-arrow-left"></i>
    </div>
    <div class="model-pri pos" :class="active3" @click.stop="posFun('3')">
      <i class="iconfont icon-hot"></i>
    </div>
    <div class="model-top pos" :class="active1" @click.stop="posFun('1')">
      <i class="iconfont icon-rising"></i>
    </div>
    <div v-show="isBack" class="model-back pos" :class="active2" @click.stop="posFun('2')">
      <i class="iconfont icon-leftarrow"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    statu: {
      type: String,
      default: 'cen'
    },
    isBack: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      status: this.statu, // start 全显示； cen 半显示； end 隐藏
      timer: '',
      timers: '',
      active1: 'hide', // show 显示； hide 隐藏
      active2: 'hide', // show 显示； hide 隐藏
      active3: 'hide', // show 显示； hide 隐藏
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
      this.active3 = 'show';
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
        this.active3 = 'hide';
      },2000)
    },
    // 浮框变化
    changeModel() {
      this.timer = setTimeout(()=>{
        this.status = 'cen';
      },1000)
    },
    // 1上滑；2返回
    posFun(code) {
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
          this.active3 = 'hide';
        },1000)
      } else if (code === '2') {
        this.$router.go(-1);
      } else if (code === '3') {
      } else {
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
    >div {
      line-height: 20px;
      vertical-align: middle;
    }
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
      background-color: #3399ff;
      &.start{
        right: 0;
      }
      &.cen{
        right: -15px;
      }
      &.end{
        right: -30px;
      }
      .iconfont {
        &.icon-double-arrow-left {
          font-size: 22px;
        }
      }
    }
    .model-pri {
      bottom: 55%;
      background-color: #fff;
      box-shadow: 1px 1px 2px 1px #ebedf0;
      &.show {
        right: 0;
      }
      &.hide {
        right: -30px;
      }
      .iconfont {
        &.icon-hot {
          font-size: 22px;
        }
      } 
    }
    .model-top {
      bottom: 45%;
      background-color: #fff;
      box-shadow: 1px 1px 2px 1px #ebedf0;
      &.show {
        right: 0;
      }
      &.hide {
        right: -30px;
      }
      .iconfont {
        &.icon-rising {
          font-size: 22px;
        }
      } 
    }
    .model-back {
      bottom: 40%;
      background-color: #fff;
      box-shadow: 1px 1px 2px 1px #ebedf0;
      &.show {
        right: 0;
      }
      &.hide {
        right: -30px;
      }
      .iconfont {
        &.icon-leftarrow {
          font-size: 22px;
        }
      }
    }
  }
</style>