<template>
  <div class="music-main">
    <!-- 头部 -->
    <Search :placeholder="placeholder" :searchVal='searchVal' :isShow="isShow" :isBack="isBack"></Search>
    <div class="cen">
      <Swipers :list="list"/>
      <MusModel :musicList="musicList"/>
    </div>
  </div>
</template>

<script>

export default {
  name:'music',
  components: {
    Search:()=>import('@/components/search/search'),
    Swipers:()=>import('@/components/swipers/index'),
    MusModel:()=>import('@/components/musModel/index'),
  },
  data(){
    return{
      searchVal: '',
      isShow: true,
      isBack: true,
      placeholder:'音乐',
      list:[{
        img:'1.png'
      },{
        img:'2.png'
      },{
        img:'3.png'
      }],
      musicList:[
        {
          img:'',
          title:'',
          name:''
        }
      ]
    }
  },
 
}
</script>

<style lang="less" scoped>
.music-main{
  .cen{
    padding: 54px 0 0;
    font-size: 16px;
  }

}
</style>
