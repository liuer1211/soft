<template>
  <div class="novel-main">
    <!-- 简介 -->
    <Introduce  ></Introduce>
    <!-- 类型 -->
    <TypeModel></TypeModel>
    <!-- 右侧浮框 -->
    <RightModel></RightModel>
    <Skeleton v-show="$store.state.common.isLoading"/>
  </div>
</template>

<script>
import Introduce from '@/pages/novel/components/introduce/introduce'
import TypeModel from '@/pages/novel/components/typeModel/typeModel'
import RightModel from '@/components/rightModel/rightModel'
import Skeleton from '@/components/skeleton'
// import { reqQueryNovalDetail } from '@/axios/index' 
export default {
  components: {
    Introduce, TypeModel, RightModel, Skeleton
  },
  date() {
    return {
      // novelInfo: {}
    }
  },
  created() {
    // this.getListDetail();
  },
  mounted() {
    // console.log(this.$route.params.data)
  },
  methods:{
    // // 获取数据，展示，存储
    // async getListDetail(){
    //   // 首页进入
    //   if (this.$route.params.data) {
    //     // this.novelInfo = this.$route.params.data;

    //     let params = {
    //       novalId: this.$route.params.data.id.toString()
    //     }
    //     let data = await reqQueryNovalDetail(params);
    //     // console.log(data)
    //     if (data.responseCode && data.responseCode === '0000') {
    //       this.novelInfo = data.result;
    //       console.log(this.novelInfo)
    //     }

    //     // 存入vuex
    //     // this.$store.dispatch('getNovelInfo',this.$route.params.data)
    //   } else {
    //     // 详细页返回
    //     if (this.$store.state.novel.novelInfo && this.$store.state.novel.novelInfo.num) {
    //       this.novelInfo = this.$store.state.novel.novelInfo;
    //     } else {
    //       this.$router.go(-1);
    //     }
    //   }
    // }
  }
}
</script>

<style lang="less" scoped>
  .novel-main {
  }
</style>