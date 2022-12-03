<template>
  <div class="draw-main">
    <div class="draw-one">
      <img class="img" :class="{active:isStart}" src="../../assets/images/article/2.png">
      <van-button type="primary" @click="start">开始抽签</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isStart: false,
      }
    },
    methods: {
      // 开始抽签
      start() {
        if(this.isStart) return;
        this.isStart = true;
        setTimeout(()=>{
          this.isStart = false;
        },3000)
      }
    },
    mounted(){
    },
  }
</script>

<style scoped lang="less">
  .draw-main{
    .draw-one{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 100px 0 0 0;
      .img{
        width: 75px;
        height: 100%;
        object-fit: cover;
        display: block;
        &.active{
          animation: anima 3s linear infinite;
        }
      }
    }
  }
  /deep/ .van-button--primary {
    margin-top: 20px;
    color: #fff;
    background-color: #fbb953;
    border: 0.02667rem solid #fbb953;
  }
  @keyframes anima{ 
    10% { 
      transform: rotate(15deg); 
    } 
    20% { 
      transform: rotate(-15deg); 
    } 
    30% { 
      transform: rotate(15deg); 
    } 
    40% { 
      transform: rotate(-15deg); 
    } 
    50%{ 
      transform: rotate(15deg); 
    }
    60%{ 
      transform: rotate(-15deg); 
    } 
    70%{ 
      transform: rotate(15deg); 
    } 
    80%{ 
      transform: rotate(-15deg); 
    } 
    90%{ 
      transform: rotate(15deg); 
    } 
    100% { 
      transform: rotate(0deg); 
    } 
  } 
</style>
