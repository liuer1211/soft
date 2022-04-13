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
    }
  },
  mounted() {
    console.log(this.$route.params.data)
  },
  methods:{
  }
}
</script>

<style lang="less" scoped>
  .novel-main {
  }
</style>