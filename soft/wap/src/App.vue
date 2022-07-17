<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
  // import Skeleton from '@/components/skeleton'
  export default {
    name: 'App',
    // components: {
    //   Skeleton
    // },
    mounted() {
      // console.log(this.$store)
    }
  }
</script>

<style lang="less">
  // @import 'assets/reset.less';
  // @vw-with: 750;
  // html{
  //   font-size: 100vw/@vw-with * 40;
  // }
  body {
    background-color: #fafafa;
  }
  .body-overflow-hidden {
    overflow: hidden;
  }
</style>

