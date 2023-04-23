<template>
  <div class="datav">
    <dv-full-screen-container>
      <div class="model-box">
        <!-- <div class="model1">
          <dv-border-box-1>
            <dv-scroll-board :config="config" style="width:100%;height:100%"/>
          </dv-border-box-1>
        </div> -->
        <!-- <div class="model2">
          <dv-border-box-9>
            <dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
          </dv-border-box-9>
          <dv-border-box-8>
            <dv-decoration-12 style="width:150px;height:150px;"/>
          </dv-border-box-8>
        </div> -->
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
      }
      .sp2 {
        left: 58px;
        top: 123px;
      }
      .sp3 {
        right: 50px;
        top: 50px;
      }
      .sp4{
        bottom: 106px;
        right: 112px;
      }
      .sp5{
        bottom: 59px;
        left: 83px;
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
  }
</style>
