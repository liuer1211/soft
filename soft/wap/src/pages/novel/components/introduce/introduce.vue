<template>
  <div class="introduce-main">
    <div class="introduce-model">
      <div class="in-left">
        <img src="#" alt=""/>
        <i @click="toShow">
          <van-icon name="play-circle-o" />
        </i>
      </div>
      <div class="in-right">
        <div>夜灵犀传奇</div>
        <div>作者：夜灵犀</div>
        <div>更新于：2020-02-02</div>
        <p>
          江湖纷争几时休，笑看痴人坠其中。江湖纷争几时休，笑看痴人坠其中。
        </p>
      </div>
    </div>
    <van-popup v-model="show" :close-on-click-overlay="false" closeable close-icon="close" teleport="#introduce-main" :style="{ width: '80%',height: '80%' }">
      <div class="pop-main"> 
        <div>
          视屏
        </div>
        <div>
          简介
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
  },
  methods:{
    // 展示弹框
    toShow() {
      this.show = true;
    }
  }
}
</script>

<style lang="less" scoped>
  .introduce-main{
    padding: 12px;
    box-sizing: border-box;
    .introduce-model {
      font-size: 16px;
      display: flex;
      background-color: antiquewhite;
      border-radius: 4px;
      padding: 12px;
      box-sizing: border-box;
      box-shadow: 1px 1px 2px 1px #ebedf0;
      .in-left {
        width: 100px;
        min-width: 100px;
        height: 120px;
        background-color: aqua;
        border-radius: 4px;
        overflow: hidden;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: convert;
          display: block;
        }
        >i {
          position:absolute;
          bottom: 4px;
          right: 4px;
          width: 16px;
          height: 16px;
        }
      }
      .in-right {
        flex: 1;
        padding: 2px 0 0 12px;
        overflow: hidden;
        >div {
          padding: 0 0 6px 0;
          &:nth-child(1) {
            font-weight: 600;
          }
          &:nth-child(2) {
            font-size: 14px;
          }
          &:nth-child(3) {
            font-size: 12px;
          }
        }
        p {
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          width: 200px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          text-indent: 12px;
          line-height: 18px;
        }
      }
    }
    /deep/ .van-popup {
      &.van-popup--center {
        border-radius: 4px;
        .van-popup__close-icon--top-right{
          top: 0;
          right: 0;
          color: #000;
        }
      }
    }
    .pop-main {
      font-size: 16px;
      padding: 12px;
    }
  }
</style>