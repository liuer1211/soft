<template>
  <div id="app" class="app">
    <!-- 打包app,直接跳转vue项目 -->
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    window.location.href="http://180.76.106.221"
  }
}
</script>

<style>
  .app{
    background: #000;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
</style>
