<template>
  <div class="peo-detail-main">
    <!-- 头部 -->
    <div class="peo-detail-top">
      <div>
        <img src="#" alt=""/>
      </div>
      <div>
        <div>名字：夜灵犀</div>
        <div>技能：</div>
        <div>门派：</div>
        <div>事迹：</div>
        <div>座右铭：</div>
        <i></i>
      </div>
    </div>
    <!-- 内容 -->
    <div class="peo-detail-cen">
      <p>描述</p>
      <p>批言</p>
      <p>事迹</p>
    </div>
    <!-- 右侧浮框 -->
    <RightModel></RightModel>
  </div>
</template>

<script>
import RightModel from '@/components/rightModel/rightModel'

export default {
  components: {
    RightModel
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
  .peo-detail-main {
    font-size: 16px;
    padding: 12px;
    box-sizing: border-box;
    .peo-detail-top {
      box-sizing: border-box;
      display: flex;
      border-radius: 4px;
      background-color: aliceblue;
      overflow: hidden;
      >div:first-child{
        width: 100px;
        min-width: 100px;
        height: 120px;
        border-radius: 4px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
      }
      >div:last-child {
        flex: 1;
        padding: 0 0 0 10px;
        line-height: 24px;
        position: relative;
        >div {
        }
        i {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 20px;
          height: 20px;
          background-color: aquamarine;
          cursor: pointer;
        }
      }
    }
    .peo-detail-cen {
      padding: 12px 0 0 0;
      line-height: 20px;
      >p {

      }
    }
  }
</style>