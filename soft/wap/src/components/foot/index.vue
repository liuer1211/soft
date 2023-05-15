<template>
  <div class="foot-main">
    <div :class="$route.path==='/home'?'active':''" @click="toPage('home')">
      <van-icon name="home-o"/>
      <span>首页</span>
    </div>
    <div :class="$route.path==='/article'?'active':''" @click="toPage('article')">
      <van-icon name="orders-o"/>
      <span>文章</span>
    </div>
    <div :class="$route.path==='/record'?'active':''" @click="toPage('record')">
      <van-icon name="circle" v-if="$route.path!=='/record'"/>  
      <van-icon @click="toRecord" name="plus" class="weight" v-if="$route.path==='/record'"/>
      <span v-if="$route.path!=='/record'">记录</span>
    </div>
    <div :class="$route.path==='/datav'?'active':''" @click="toPage('datav')">
      <van-icon name="flower-o"/>
      <span>生态</span>
    </div>
    <div :class="$route.path==='/user'?'active':''" @click="toPage('user')">
      <van-icon name="manager-o"/>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default{
  methods:{
    toPage(code){
      switch(code){
        case 'home':
          this.$router.replace({
            path:'/home'
          })
          return;
        case 'article':
          this.$router.replace({
            path:'/article'
          })
          return;
        case 'record':
          this.$router.replace({
            path:'/record'
          })
          return;
        case 'datav':
          this.$router.push({
            path:'/datav'
          })
          return;
        case 'user':
          this.$router.replace({
            path:'/user'
          })
          return;
        default:
          return;  
      }
    },
    toRecord() {
      Toast('暂未开通')
    }
  }
}
</script>

<style lang="less" scoped>
  .foot-main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 54px;
    position: fixed;
    bottom: -1px;
    padding: 12px;
    box-sizing: border-box;
    z-index: 99;
    background: #fff;
    border-top: 1px solid #eee;
    font-size: 14px;
    >div{
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;
      transition: .3s;
      &.active{
        color: #3399ff;
      }
      >span {
        margin-top: 4px;
      }
      >i{
        font-size: 18px;
        &.weight{
          font-weight: 600;
        }
      }
    }
  }
</style>