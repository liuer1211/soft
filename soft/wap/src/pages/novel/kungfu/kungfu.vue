<template>
  <div class="kungfu-main">
    <div id="canvas-main">
      <canvas id="canvas" class="canvas" width="375px" height="667px">
        <p>Your browser doesn't support the HTML5 CANVAS tag.</p>
      </canvas>
      <div style="display: none" id="canvas-model">
        <ul role="list">
          <li><a href="javascript:;" style="font-size: 6pt;">惊雷剑法</a></li>
          <li><a href="javascript:;" style="font-size: 32.181818181818pt;">凤舞九天</a></li>
          <li><a href="javascript:;" style="font-size: 10.363636363636pt;">九阳神功</a></li>
          <li><a href="javascript:;" style="font-size: 12.909090909091pt;">乾坤大挪移</a></li>
          <li><a href="javascript:;" style="font-size: 8.1818181818182pt;">迷魂大法</a></li>
          <li><a href="javascript:;" style="font-size: 8.5454545454545pt;">生死决</a></li>
          <li><a href="javascript:;" style="font-size: 16.909090909091pt;">燕云七绝</a></li>
          <li><a href="javascript:;" style="font-size: 11.818181818182pt;">扶摇九天</a></li>
          <li><a href="javascript:;" style="font-size: 6pt;">音波功</a></li>
          <li><a href="javascript:;" style="font-size: 21.272727272727pt;">混元功</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.$route.params.data);
    this.getInit();
  },
  methods:{
    getInit() {
      jQuery(document).ready(function() {
        if( ! jQuery('#canvas').tagcanvas({
            textFont: 'Impact,"Arial Black",sans-serif',
            textColour: '#ffffff',
            outlineColour: '#aaaaaa',
            reverse: true,
            textHeight:16,
            shape: "sphere", 
            depth: 0.8,
            decel:0.99,
            padding:0,
            wheelZoom: true,
            dragControl: false,
            fadeIn: 0,
            freezeActive: false,
            outlineMethod: "outline",
            outlineOffset: "5",
            outlineRadius: "0",
            outlineThickness: "2",
            maxSpeed: 0.05
            },'canvas-model')) {
          jQuery('#canvas-main').hide();
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
  .kungfu-main {
    display: flex;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #000;
    overflow: hidden;
    .canvas {
      background-color: #000000;
    }
  }
</style>