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
          {title: '最新', active:'1'},
          {title: '最热', active:'2'},
          {title: '人文', active:'3'},
          {title: '科技', active:'4'},
          {title: '历史', active:'5'},
          {title: '经济', active:'6'},
          {title: '流行', active:'7'},
        ],
        modelList: [
          {title: '最新', des: '最新资讯', img: '1.jpg', name: '张三', date: '2022-02-02', top: '1', look: '10', agree: '12'},
          {title: '最热', des: '最新资讯', img: '1.jpg', name: '李四', date: '2022-05-01', top: '1', look: '10', agree: '12'},
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