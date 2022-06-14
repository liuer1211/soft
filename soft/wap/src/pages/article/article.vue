<template>
  <div class="article-main">
    <!-- 导航 -->
    <Tab :list="tabList"/>
    <!-- 内容 -->
    <div class="art-model">
      <Model :list="modelList"/>
    </div>
    <!-- 右侧浮框 -->
    <RightModel></RightModel>
  </div>
</template>

<script>
  import RightModel from '@/components/rightModel/rightModel'
  import Tab from '@/components/tab/tab'
  import Model from './components/model'

  export default {
    components: {
      RightModel, Tab, Model
    },
    data() {
      return {
        tabList: [
          {title: '最新', type: '01', active:'1'},
          {title: '最热', type: '02', active:'2'},
          {title: '人文', type: '03', active:'3'},
          {title: '科技', type: '04', active:'4'},
          {title: '历史', type: '05', active:'5'},
          {title: '经济', type: '06', active:'6'},
          {title: '诗词', type: '07', active:'7'},
          {title: '歌赋', type: '08', active:'8'},
          {title: '散文', type: '09', active:'9'},
        ],
        modelList: [
          {title: '生与死', des: '生不能留名，死又将何往！', img: '1.jpg', name: '山鬼', date: '2022-05-01', type: '02', top: '1', look: '10', agree: '12'},
        ]
      }
    },
    mounted() {
      console.log(this.$route)
    },
    methods: {
      getList(item) {
        console.log(item)
      }
    }
  }
</script>

<style lang='less' scoped>
  .article-main {
    font-size: 16px;
    .art-model {
      padding: 56px 0 0;
    }
  }
</style>

<script>
// 每一次的改革，受苦的都是第一个受害者

// 做一个安逸者，等机会，政府开放那一块，那一块就会富

// 历史是一个轮回

// 生与死

// 阴暗潮湿的地方会生成蜘蛛，几百万年前是微生物，几百万年后会不会是人
</script>
