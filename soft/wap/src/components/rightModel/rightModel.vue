<template>
  <div class="right-model-main">
    <div class="right-model-one pos" :class="status" @click.stop="toShow">
      <i class="iconfont icon-double-arrow-left"></i>
    </div>
    <!-- 返回首页 -->
    <div v-show="isBack" class="model-pri pos" :class="active3" @click.stop="posFun('3')">
      <i class="iconfont icon-warehouse"></i>
    </div>
    <div class="model-top pos" :class="active1" @click.stop="posFun('1')">
      <i class="iconfont icon-rising"></i>
    </div>
    <!-- 返回上一页 -->
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
    // console.log(this.statu,this.isBack)
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
        this.$router.push('/home')
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
      z-index: 888;
    }
    .pos {
      position: fixed;
      right: 0;
      width: 40px;
      height: 40px;
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
        right: -20px;
      }
      &.end{
        right: -40px;
      }
      .iconfont {
        &.icon-double-arrow-left {
          font-size: 28px;
          padding-left: 1px;
          line-height: 32px;
        }
      }
    }
    .model-pri {
      bottom: 57%;
      background-color: #fff;
      // box-shadow: 1px 1px 2px 1px #ebedf0;
      &.show {
        right: 0;
      }
      &.hide {
        right: -40px;
      }
      .iconfont {
        &.icon-warehouse {
          font-size: 28px;
        }
      } 
    }
    .model-top {
      bottom: 43%;
      background-color: #fff;
      // box-shadow: 1px 1px 2px 1px #ebedf0;
      &.show {
        right: 0;
      }
      &.hide {
        right: -40px;
      }
      .iconfont {
        &.icon-rising {
          font-size: 28px;
          padding-left: 2px;
        }
      } 
    }
    .model-back {
      bottom: 36%;
      background-color: #fff;
      // box-shadow: 1px 1px 2px 1px #ebedf0;
      &.show {
        right: 0;
      }
      &.hide {
        right: -40px;
      }
      .iconfont {
        &.icon-leftarrow {
          font-size: 28px;
        }
      }
    }

    .iconfont {
      line-height: 28px;
      padding-left: 3px;
    }
  }
</style>