<template>
  <div class="home-main">
    <!-- 头部 -->
    <Search :searchVal='searchVal' :isShow="isShow"></Search>
    <!-- 内容 -->
    <div class="home-center">
      <ImgModel></ImgModel>
    </div>
    <!-- 右侧浮框 -->
    <RightModel :statu="statu" :isBack="isBack"></RightModel>
    <!-- 英雄帖 -->
    <Stick/>
  </div>
</template>

<script>
  import Search from '@/components/search/search'
  import ImgModel from '@/components/imgModel/imgModel'
  import RightModel from '@/components/rightModel/rightModel'
  import Stick from '@/components/stick/stick'
  // import Push from 'push.js'

  export default {
    components: {
      Search, ImgModel, RightModel, Stick
    },
    data() {
      return {
        searchVal: '',
        isShow: true,
        statu: 'start',
        isBack: false
        // offsetTop: document.body.offsetTop,
      }
    },
    mounted() {
      // console.log(document.body.offsetHeight)
      // console.log(document.body.offsetTop)
      // console.log(document.body.clientHeight)
      // console.log(this.offsetTop)
      // window.addEventListener('scroll',this.rollingheight,true)
    },
    created() {
      //消息通知的初始化
      // Push.Permission.request();
    },
    watch:{
      // offsetTop(val) {
      //   console.log(val)
      // }
    },
    methods: {
      rollingheight(e){
        // console.log(window.pageYOffset)
        // if (window.pageYOffset>0) {
        //   this.isShow = false
        //   console.log(this.isShow)
        // } else {
        //   this.isShow = true
        // }
      },

      // dianji(){
      //   console.log('123')
      //   //消息通知的内容
      //   this.pushMessage('消息通知的内容');
      // },
      // //推送弹框消息
      // pushMessage(message){
      //   Push.create("消息通知的标题", {
      //     body: message,
      //     requireInteraction: true,
      //     //icon: '/icon.png',
      //     timeout: 600000,
      //   });
      // }
    }
  }
</script>

<style lang="less" scoped>
  .home-main{
    .home-center{
      padding-top: 66px;
    }
  }
</style>