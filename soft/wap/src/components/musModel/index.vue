<template>
  <div class="musModel-main">
    <div class="m-model">
      <img src="../../assets/images/music/m1.png" alt="music">
      <div class="m-right">
        <div>
          <h2>印双人</h2>
          <span>六耳</span>
        </div>
        <div>
          <van-icon name="ellipsis" />
        </div>
      </div>
    </div>
    <div class="m-model">
      <img src="../../assets/images/music/m1.png" alt="music">
      <div class="m-right">
        <div>
          <h2>再等</h2>
          <span>灵犀</span>
        </div>
        <div>
          <van-icon name="ellipsis" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'musModel',
  props:{
    musicList:{
      type:String,
      default:()=>([])
    }
  },
  data(){
    return{
    }
  },
  mounted() {
  },
  methods:{
  }
}
</script>

<style lang="less" scoped>
.musModel-main{
  // padding: 6px 0;
  .m-model{
    background: linear-gradient(to right, #aec8ff, #b4b9ff, #eae3ff);
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px 12px;
    box-sizing: border-box;
    &:not(:last-child){
      border-bottom: 1px solid #f6f6f6;
    }
    img{
      min-width: 40px;
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 4px;
    }
    .m-right{
      flex: 1;
      display: flex;
      align-items: center;
      padding: 0 0 0 12px;
      overflow: hidden;
      >div{
        overflow: hidden;
        &:first-child{
          flex: 1;
        }
        h2{
          margin-bottom: 6px;
          overflow: hidden;
          white-space:nowrap;
          text-overflow:ellipsis;
          color:#fff;
        }
        span{
          font-size: 14px;
          color: #f5f5f5;
        }
        i{
          font-size: 20px;
        }
      }
    }
  }
}
</style>