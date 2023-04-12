<template>
  <div id="app">
    <router-view></router-view>
    <Foot v-show="$route.meta.foot"/>
  </div>
</template>

<script>
  import Foot from './components/foot';
  // import Skeleton from '@/components/skeleton'
  export default {
    name: 'App',
    // components: {
    //   Skeleton
    // },
    components: {
      Foot
    },
    mounted() {
      // console.log(this.$store)
      // android点击手机物理返回键退出app bug解决
      document.addEventListener('plusready',function(){
        var webview = plus.webview.currentWebview();
        plus.key.addEventListener('backbutton', function() {
            webview.canBack(function(e) {
                if (e.canBack) {
                    webview.back();
                } else {
                    webview.close();//hide,quit
                }
            })
        });
      });
    }
  }
</script>

<style lang="less">
  @import 'assets/reset.less';
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

