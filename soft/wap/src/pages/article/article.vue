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
          {title: '经济', active:'5'},
          {title: '流行', active:'6'}
        ],
        modelList: [
          {title: '最新', name: '张三', date: '2022-02-02', top: '1', look: '10', agree: '12'},
          {title: '最热', name: '张三', date: '2022-02-02', top: '1', look: '10', agree: '12'},
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