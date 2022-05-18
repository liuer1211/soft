<template>
  <div class="fatalism-main">
    <div class="fatalism-model">
      <div class="round" 
        v-for="(item, index) in list" 
        :key="index" 
        :style="{top:item.top+'%',left:item.left+'%'}"
        @click="goPage(item)"
      ></div>
      <div class="info" 
        v-for="(item, index) in list" 
        :key="'id'+index" 
        :style="{top:item.topTip+'%',left:item.leftTip+'%'}"
        @click="goPage(item)"
      >
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          top: 10,
          left: 10,
          topTip: 10-6,
          leftTip: 10-2,
          title: '少室山',
          name: '初试江湖',
          code: '001'
        },
        {
          top: 20,
          left: 30,
          topTip: 20-6,
          leftTip: 30-2,
          title: '紫禁城',
          name: '香楼听曲',
          code: '002'
        },
        {
          top: 30,
          left: 10,
          topTip: 30-6,
          leftTip: 10-2,
          title: '小重山',
          name: '邪剑之争',
          code: '003'
        },
        {
          top: 50,
          left: 50,
          topTip: 50-6,
          leftTip: 50-2,
          title: '紫禁城',
          name: '名剑山庄论剑',
          code: '004'
        },
        {
          top: 70,
          left: 50,
          topTip: 70-6,
          leftTip: 50-2,
          title: '小重山',
          name: '风花雪月',
          code: '003'
        }
      ]
    };
  },
  mounted() {
    // this.$nextTick(() => { 
    //   console.log(document.documentElement.clientHeight);
    // });
  },
  methods: {
   // 跳转
   goPage(data) {
     console.log(data)
   }
  },
};
</script>

<style lang="less" scoped>
  .fatalism-main {
    font-size: 14px;
    .fatalism-model {
      position: absolute;
      height: 100%;
      width: 100%;
      background: linear-gradient(to top, #3932ff, #5d84dc);
      >div {
        position: absolute;
        background-color: #000;
        color: #fff;
        cursor: pointer;
        &.round {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #fff;
          animation: toshow 2s;
        }
        &.info {
          padding: 8px;
          box-sizing: border-box;
          border-radius: 4px;
          animation: toshow 2s;
          &::after {
            content: '';
            position: absolute;
            bottom: -9px;
            left: 12px;
            border: 5px solid #000;
            border-top-color: #000;
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
          }
        }
      }
    }
  }
  @keyframes toshow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>