<template>
  <div class="datav">
    <dv-full-screen-container>
      <div class="model-box">
        <div class="model1">
          <dv-border-box-1>
            <dv-scroll-board :config="config" style="width:100%;height:100%"/>
          </dv-border-box-1>
        </div>
        <div class="model2">
          <dv-border-box-9>
            <dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
          </dv-border-box-9>
          <dv-border-box-8>
            <dv-decoration-12 style="width:150px;height:150px;"/>
          </dv-border-box-8>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config:{
        header: ['列1', '列2', '列3'],
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
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
    #dv-full-screen-container{
      z-index:98;
    }
    .model-box{
      display: flex;
      flex-direction: column;
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
    }
  }
</style>
