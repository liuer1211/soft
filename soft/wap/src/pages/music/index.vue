<template>
  <div class="music-main">
    <!-- 头部 -->
    <Search :placeholder="placeholder" :searchVal='searchVal' :isShow="isShow" :isBack="isBack"></Search>
    <div class="cen">
      <Swipers ></Swipers>
    </div>
  </div>
</template>

<script>

export default {
  name:'music',
  components: {
    Search:()=>import('@/components/search/search'),
    Swipers:()=>import('@/components/swipers/index'),
  },
  data(){
    return{
      searchVal: '',
      isShow: true,
      isBack: true,
      placeholder:''
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
