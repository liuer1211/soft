<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
    }
  }
</script>

<style lang="less">
  @import 'assets/reset.less';
  body {
    background-color: #fafafa;
  }
  .body-overflow-hidden {
    overflow: hidden;
  }
</style>

