<template>
  <div class="stick-main">
   <div class="stick-rig" :class="{hid:!$store.state.common.isStick}" @click.stop="open">
      <span>英</span>
      <span>雄</span>
      <span>贴</span>
    </div>
    <div v-show="isStick" class="stick-model-main" @click.stop="close">
      <div class="stick-model" :class="{hid:$store.state.common.isStick}">
        <h1>英雄帖</h1>
        <p>
          <!-- 吾观历史，始终逃不出一个轮回！
          今人视昔，昔人视今，犹过往视今朝，今朝视过往。
          历朝历代不过百年，然流芳千古之人又有几何？岁月流转，又有谁可得长生？
          我们能做的只有汲取先人之精华，予以传承；革新腐朽的思想，予以改造；发现新的文明，予以传播。
          未来如何，暂且不论，但求无愧于天地，
          但求千百年之后，世人仍记得我们曾存在过！ -->
        </p>
        <p>戌之秋，七月既望，苏子与客泛舟游于赤壁之下。</p>
        <p>客叹曰：长江之无穷，而吾生却须臾。欲挟飞仙以遨游，抱明月而长终。但知不可乎骤得，唯有托遗响于悲风。</p>
        <p>苏子以水与月劝曰：逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也。盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也。</p>
        <p>吾闻其言，似有所悟，亦无所悟。亦不知二人是否当真可以做到洒脱、释怀、随性。
          人生在世，不过百年。死去元知万事空，又有谁还曾记得我存在过。青青子衿，悠悠我心。今欲与诸君共商大计，开创一幅可以载入史册的盛世。</p>
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
      z-index: 1000;
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
          // margin-top: 12px;
          word-break: break-all;
          text-indent: 12px;
          line-height: 24px;
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
