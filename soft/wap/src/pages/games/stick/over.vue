<template>
  <div class="stick-main">
    <div v-show="isStick3" class="stick-model-main" @click.stop="close">
      <div class="stick-model" :class="{hid:$store.state.common.isStick3}">
        <h1>游戏结束</h1>
        <div class="cen">
          <img src="../../../assets/images/game/g1.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isStick3() {
      return this.$store.state.common.isStick3;
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    // 打开
    open() {
      this.$store.dispatch('getStick3', true)
    },
    // 关闭
    close() {
      this.$store.dispatch('getStick3', false)
    }
  },
  watch: {
    '$store.state.common.isStick3':{
      handler(val) {
        if (val) {
          document.getElementsByTagName('body')[0].className='body-overflow-hidden';
        } else {
          document.getElementsByTagName('body')[0].className='';
        }
      },
      immediate: true,
    }
  }
}
</script>

<style lang="less" scoped>
  .stick-main {
    .stick-rig {
      position: fixed;
      bottom: 20%;
      right: 0;
      z-index: 9;
      background-color: #ffc759;
      font-size: 13px;
      padding: 4px;
      border-radius: 2px;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      border: 1px solid #ffc759;
      box-shadow: 1px 1px 2px 1px #ffc759;
      cursor: pointer;
      transition: 0.8s;
      transform-origin: right top;
      &.hid{
        transform: rotate(-30deg);
      }
      >span{
        flex: 1;
      }
    }
    .stick-model-main {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 1001;
      background: #5050507a;
      cursor: pointer;
      // animation: name duration timing-function delay iteration-count direction fill-mode;
      .stick-model {
        width: 280px;
        height: 480px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -140px;
        margin-top: -240px;
        background-color: #ffc759;
        border-radius: 4px;
        box-shadow: 1px 1px 2px 1px #ffc759;
        padding: 12px;
        box-sizing: border-box;
        font-size: 16px;
        animation: heigh 1.5s;
        h1 {
          font-size: 18px;
          text-align: center;
          font-weight: 600;
          margin-bottom: 10px;
        }
        p {
          word-break: break-all;
          text-indent: 12px;
          line-height: 24px;
        }
        .cen{
          width: 100%;
          height: 425px;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            width: 75%;
            border-radius: 4px;
          }
        }
      }
    }
    @keyframes heigh {
      0%{
        transform: rotateY(0deg)
      }
      100%{
        transform: rotateY(360deg)
      }
    }
  }
</style>
