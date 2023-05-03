<template>
  <div class="datav">
    <dv-full-screen-container>
      <div class="model-box">
        <dv-decoration-12 class="decoration"/>
      </div>
    </dv-full-screen-container>
    <div class="my-pos">
      <span class="sp1">小说</span>
      <span class="sp2">音乐</span>
      <span class="sp3">游戏</span>
      <span class="sp4">影视</span>
      <span class="sp5">文学</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config:{
        header: ['车次', '始发站', '终点站'],
        data: [
          ['K111', '上海', '北京'],
          ['G111', '上海', '北京'],
          ['Z111', '上海', '北京'],
          ['D111', '上海', '北京'],
          ['K111', '北京', '上海'],
          ['G111', '北京', '上海'],
          ['Z111', '北京', '上海'],
          ['C111', '北京', '上海'],
        ]
      },
    }
  }
}
</script>

<style lang="less" scoped>
  .datav{
    width: 100%;
    height: 100vh;
    background: #000;
    color: #fff;
    font-size: 14px;
    .my-pos{
      width: 300px;
      height: 300px;
      position: absolute;
      top: 100px;
      right: 38px;
      font-size: 16px;
      >span{
        position: absolute;
      }
      .sp1 {
        top: 141px;
        left: 136px;
        animation: sp1 1s;
      }
      .sp2 {
        left: 58px;
        top: 123px;
        animation: sp2 1.5s;
      }
      .sp3 {
        right: 50px;
        top: 50px;
        animation: sp3 2s;
      }
      .sp4{
        bottom: 106px;
        right: 112px;
        animation: sp4 2.5s;
      }
      .sp5{
        bottom: 59px;
        left: 83px;
        animation: sp5 3s;
      }
    }
    #dv-full-screen-container{
      z-index:98;
    }
    .model-box{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      .model1{
        height: 200px;
        /deep/ .dv-border-box-1{
          .border-box-content{
            padding: 14px;
            box-sizing: border-box;
            .dv-scroll-board{
              border-radius: 12px;
              overflow: hidden;
            }
          }
        }
      }
      .model2{
        display: flex;
        height: 200px;
        /deep/ .dv-border-box-9{
          .border-box-content{
            padding: 14px;
            box-sizing: border-box;
          }
        }
        /deep/ .dv-border-box-8{
          .border-box-content{
            padding: 14px;
            box-sizing: border-box;
          }
        }
      }
      .decoration{
        width:300px;
        height:300px;
      }
    }
    @keyframes sp1 {
      0%{
        opacity: 0
      }
      100%{
        opacity: 100
      }
    }
    @keyframes sp2 {
      0%{
        opacity: 0
      }
      100%{
        opacity: 100
      }
    }
    @keyframes sp3 {
      0%{
        opacity: 0
      }
      100%{
        opacity: 100
      }
    }
    @keyframes sp4 {
      0%{
        opacity: 0
      }
      100%{
        opacity: 100
      }
    }
    @keyframes sp5 {
      0%{
        opacity: 0
      }
      100%{
        opacity: 100
      }
    }
  }
</style>
