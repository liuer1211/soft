<template>
  <div class="musModel-main">
    <div class="m-model" v-for="(item,index) in musicList" :key="index" @click="toDetail(item)">
      <img :src="getImg(item.img)" alt="music">
      <div class="m-right">
        <div>
          <h2>{{item.title}}</h2>
          <span>{{item.name}}</span>
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
      type:Array,
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
    getImg(img){
      return require(`../../assets/images/music/${img}`)
    },
    // 详情
    toDetail(item){
      this.$router.push({
        path:'/musicdetail',
        query: item
      })
    }
  }
}
</script>

<style lang="less" scoped>
.musModel-main{
  padding: 0 12px 6px;
  box-sizing: border-box;
  .m-model{
    background: linear-gradient(to right, #5655ee, #6260eb);
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px 12px;
    box-sizing: border-box;
    margin-bottom: 6px;
  border-radius: 4px;
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
      color:#fdfdfd;
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
        }
        span{
          font-size: 14px;
          color: #e4e4e4;
        }
        i{
          font-size: 20px;
          transform: rotate(90deg);
        }
      }
    }
  }
}
</style>