<template>
  <div class="peo-detail-main">
    <!-- 头部 -->
    <!-- <div class="peo-detail-top">
      <div>
        <img src="../../../assets/images/imgmodel/001.png" alt=""/>
      </div>
      <div>
        <div>名字：夜灵犀</div>
        <div>技能：</div>
        <div>门派：</div>
        <div>事迹：</div>
        <div>座右铭：</div>
        <i>
          <i class="iconfont icon-pin"></i>
        </i>
      </div>
    </div> -->
    <!-- 内容 -->
    <!-- <div class="peo-detail-cen">
      <p>描述</p>
      <p>批言</p>
      <p>事迹</p>
    </div> -->

    <div class="model-main">
      <h1>{{obj.name}}</h1>
      <div>门派</div>
      <div>功夫</div>
      <div>描写</div>
      <div>{{obj.shiji}}</div>
    </div>
    <div class="bg-main"></div>
    <div class="img-main"></div>
    
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
  data() {
    return {
      obj: {
        name: '夜灵犀夜灵犀夜灵犀',
        shiji: '夜灵犀夜灵犀夜灵犀'
      }
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
    .model-main {
      position: absolute;
      top: 0;
      // overflow: auto;
      width: 100%;
      padding: 12px 12px 0;
      box-sizing: border-box;
      z-index: 99;
      font-size: 14px;
      color: #fff;
    }
    .bg-main {
      overflow: hidden;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9;
      background: radial-gradient(220% 105% at top center, #0f378c 10%, #5f63d6 40%, #6f73e9 65%, #578ceb);
    }
    .img-main {
      overflow: hidden;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      background: url(../../../assets/images/people/y.jpg) no-repeat;
      background-size: 100% 100%;
      opacity: 0.2;
    }
  }
</style>