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
          {
            title: '生与死', 
            des: '生不能留名，死又将何往！', 
            img: '1.jpg', 
            name: '山鬼', 
            date: '2022-06-01', 
            type: '02', 
            top: '1', 
            look: '10', 
            agree: '12'
          },
          {
            title: '壬寅变革-圆桌文体', 
            des: '是时候出现一种新的文体了！', 
            img: '1.jpg', 
            name: '雅风', 
            date: '2022-05-20', 
            type: '02', 
            top: '1', 
            look: '10', 
            agree: '12'
          },
          {
            title: '历史是一个轮回', 
            des: '后人哀之而不鉴之，亦使后人而复哀后人也！', 
            img: '1.jpg', 
            name: '山鬼', 
            date: '2022-05-01', 
            type: '02', 
            top: '1', 
            look: '10', 
            agree: '12'
          },
          {
            title: '融合与入侵', 
            des: '文明、迁徙、开放、发展', 
            img: '1.jpg', 
            name: '百香子', 
            date: '2022-04-01', 
            type: '02', 
            top: '1', 
            look: '10', 
            agree: '12'
          },
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

 
