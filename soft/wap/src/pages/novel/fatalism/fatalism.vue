<template>
  <div class="fatalism-main">
    <div class="fatalism-model">
      <div v-for="(item, index) in list" :key="index" 
        :style="{ top: item.top+'px', left: item.left + 'px' }">
        <div>
          <span>{{item.name}}</span>
          <h2>{{item.title}}</h2>
        </div>
      </div>
    </div>
    <div class="fatalism-bg"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          top: 100,
          left: 100,
          title: '少室山',
          name: '初试江湖'
        },
        {
          top: 100,
          left: 300,
          title: '少室山',
          name: '初试江湖'
        },
        {
          top: 100,
          left: 800,
          title: '少室山',
          name: '初试江湖'
        }
      ]
    };
  },
  mounted() {
  },
  methods: {
   
  },
};
</script>

<style lang="less" scoped>
  .fatalism-main {
    font-size: 14px;
    .fatalism-model {
      // position: absolute;
      // height: 100%;
      // width: 100%;
      overflow-x: auto;
      // overflow-y: hidden;
      // z-index: 2;
      >div {
        position: absolute;
        padding: 8px;
        box-sizing: border-box;
        z-index: 3;
        >div {
          position: relative;
          >span {
            padding: 4px;
            box-sizing: border-box;
          }
          >h2 {
            position: absolute;
            font-size: 16px;
          }
        }
      }
    }
    .fatalism-bg {
      position: fixed;
      height: 100%;
      width: 100%;
      background: linear-gradient(to bottom, #d87af8, #3932ff);
      z-index: 1;
    }
  }
</style>