<template>
  <div class="stick-main">
    <div class="stick-rig hid" @click.stop="open">
      <span>英</span>
      <span>雄</span>
      <span>贴</span>
    </div>
    <div v-show="isStick" class="stick-model">
      <div>

      </div>
      <div class="close" @click.stop="close">
        <span>×</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isStick() {
      return this.$store.state.common.isStick;
    }
  },
  data() {
    return {
    }
  },
  methods: {
    // 打开
    open() {
      this.$store.dispatch('getStick', true)
    },
    // 关闭
    close() {
      this.$store.dispatch('getStick', false)
    }
  },
  watch: {
    '$store.state.common.isStick':{
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
      background-color: #ffba32;
      font-size: 0.32rem;
      padding: 0.10667rem;
      border-radius: 0.05333rem;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      border: 0.02667rem solid #eac22a;
      cursor: pointer;
      transition: 0.5s;
      &.hid{
        transform: rotate(-30deg);
      }
      >span{
        flex: 1;
      }
    }
    .stick-model {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 1000;
      background: #5050507a;
      transition: 0.5s;
      .close {
        color: #fff;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #fff;
        position: relative;
        >span {
          position: absolute;
          width: 20px;
          height: 20px;
          top: -3px;
          left: 1px;
        }
      }
    }
  }
</style>
