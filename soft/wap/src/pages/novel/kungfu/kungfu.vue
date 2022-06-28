<template>
  <div class="kungfu-main">
    <div id="cnvasModel">
      <canvas width="375px" height="667px" id="myCanvas">
        <p>Anything in here will be replaced on browsers that support the canvas element</p>
      </canvas>
    </div>
    <div id="tags" style="display: none;">
      <ul>
        <li v-for="(item,index) in tagArr" :key="index">
          <a href="javascript:;" >{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagArr:[
        {name:'惊雷剑法'},{name:'凤舞九天'},{name:'迷魂大法'},{name:'乾坤生死决'},
        {name:'燕云七绝'},{name:'扶摇九天'},{name:'音波功'},{name:'混元功'},
        {name:'魅影迷踪'},{name:'伏魔功'}
      ]
    }
  },
  mounted() {
    console.log(this.$route.params.data);
    this.getInit();
  },
  methods:{
    getInit() {
      try {
        TagCanvas.Start('myCanvas', 'tags', {
          textColour: '#fff',
          dragControl: 1,
          decel: 0.95,
          textHeight: 20,
          minSpeed: 0.01,
          initial: [0.1,0.1],
        });
      } catch (e) {
        document.getElementById('cnvasModel').style.display = 'none';
      }
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