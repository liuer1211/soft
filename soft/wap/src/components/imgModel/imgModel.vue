<template>
  <div class="model-main">
    <div class="model-List">
      <div class="model-top">
        <img src="../../assets/images/imgmodel/ylx.jpg" />
        <i>hot</i>
      </div>
      <div class="model-bot">
        <div>夜灵犀传奇</div>
        <div>夜灵犀</div>
        <div>2021-10-21</div>
      </div>
    </div>
    <div class="model-List">
      <div class="model-top">
        <img src="../../assets/images/imgmodel/ylx.jpg" />
        <i>hot</i>
      </div>
      <div class="model-bot">
        <div>夜灵犀传奇</div>
        <div>夜灵犀</div>
        <div>2021-10-21</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="less" scoped>
  .model-main {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 12px;
    .model-List{
      background-color: #43f5ab;
      overflow: hidden;
      border-radius: 4px;
      width: 48%;
      margin-bottom: 12px;
      .model-top {
        position: relative;
        img {
          display: block;
          object-fit: cover;
          width: 170px;
          height: 200px;
        }
        i{
          position: absolute;
          top: 0;
          right: 0;
          background-color: #fbd754;
          padding: 2px;
          font-size: 12px;
          border-bottom-left-radius: 2px;
        }
      }
      .model-bot {
        padding: 4px 0;
        div {
          padding: 4px 8px;
          font-size: 12px;
          &:first-child{
            font-size: 16px;
          }
        }
      }
    }
  }
</style>