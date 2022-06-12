<template>
  <div class="novel-main">
    <!-- 简介 -->
    <Introduce></Introduce>
    <!-- 类型 -->
    <TypeModel></TypeModel>
    <!-- 右侧浮框 -->
    <RightModel></RightModel>
  </div>
</template>

<script>
import Introduce from '@/pages/novel/components/introduce/introduce'
import TypeModel from '@/pages/novel/components/typeModel/typeModel'
import RightModel from '@/components/rightModel/rightModel'
export default {
  components: {
    Introduce, TypeModel, RightModel
  },
  date() {
    return {
      novelInfo: {}
    }
  },
  created() {
    // 首页进入
    if (this.$route.params.data && this.$route.params.data.num) {
      this.novelInfo = this.$route.params.data;
      // 存入vuex
      this.$store.dispatch('getNovelInfo',this.$route.params.data)
    } else {
      // 详细页返回
      if (this.$store.state.novel.novelInfo && this.$store.state.novel.novelInfo.num) {
        this.novelInfo = this.$store.state.novel.novelInfo;
      } else {
        this.$router.go(-1);
      }
    }
  },
  mounted() {
    // console.log(this.$route.params.data)
  },
  methods:{
  }
}
</script>

<style lang="less" scoped>
  .novel-main {
  }
</style>