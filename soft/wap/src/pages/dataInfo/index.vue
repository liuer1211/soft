<template>
  <div class="data-main">
    <div class="data-fix">
      <div><van-icon @click="$router.go(-1)" name="arrow-left" /></div>
      <div>{{this.info.name}}</div>
      <div></div>
    </div>
    <Echar/>
  </div>
</template>

<script>

export default {
  name:'dataInfo',
  components: {
    Echar:()=>import('@/components/echar/index'),
  },
  created(){
    if(this.$route.params && this.$route.params.item){
      this.info = this.$route.params.item
    } else {
      this.$router.go(-1)
    }
  },
  data(){
    return{
      info:{}
    }
  },
 
}
</script>

<style lang="less" scoped>
.data-main{
  padding: 60px 0 0;
  font-size: 16px;
  .data-fix{
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    position: fixed;
    top: 0;
    z-index: 2;
    background: #3399ff;
    height: 54px;
    align-items: center;
    color:#fff;
    .van-icon{
      font-size: 18px;
    }
  }
}
</style>
