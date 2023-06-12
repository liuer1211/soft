<template>
  <div class="music-main">
    <div class="mu-abs">
      <!-- 头部 -->
      <Search :placeholder="placeholder" :searchVal='searchVal' :isShow="isShow" :isBack="isBack"></Search>
      <div class="cen">
        <Swipers :list="list"/>
        <MusModel :musicList="musicList"/>
      </div>
    </div>
    <div class="mu-fix"></div>
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
          id:'1',
          img:'m1.png',
          title:'印双人',
          name:'六耳'
        },
        {
          id:'2',
          img:'m1.png',
          title:'印双人',
          name:'六耳'
        },
        {
          id:'3',
          img:'m1.png',
          title:'印双人',
          name:'六耳'
        },
        {
          id:'4',
          img:'m1.png',
          title:'印双人',
          name:'六耳'
        },
        {
          id:'5',
          img:'m1.png',
          title:'印双人',
          name:'六耳'
        },
        {
          id:'6',
          img:'m1.png',
          title:'印双人',
          name:'六耳'
        },
        {
          id:'7',
          img:'m1.png',
          title:'印双人',
          name:'六耳'
        }
      ]
    }
  },
 
}
</script>

<style lang="less" scoped>
.music-main{
  .mu-fix{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    background: linear-gradient(to bottom, #c7c7ff, #deddf8);
  }
  .mu-abs{
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .cen{
    padding: 54px 0 0;
    font-size: 16px;
  }

}
</style>
