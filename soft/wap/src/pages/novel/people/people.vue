<template>
  <div class="people-main">
    <div class="model-main">
      <div class="model-bg">
        <div v-for="(item,index) in list" :key="index">
          <div @click="toPage()">
            <div class="imgs">
              <img src="../../../assets/images/imgmodel/001.png" alt=""/>
            </div>
            <div>
              夜灵犀...
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="start-main">
      <div class="stars">
        <div @click="index" v-for="(item,index) in statrsCount" :key="index" ref="star" class="star"/>
      </div>
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
  data() {
    return {
      list: [
        {
          id: '1',
          img: '',
          title: '夜灵犀'
        },
        {
          id: '',
          img: '',
          title: '苏晚'
        }
      ],
      statrsCount:800,//星星数量
      distance:1000,//间距
    }
  },
  mounted() {
    this.getStar();
  },
  methods:{
    // 跳页面
    toPage(data) {
      this.$router.push({
        name: 'peopleDetail',
        params: {
          data
        }
      })
    },
    // 背景
    getStar() {
      let starArr = this.$refs.star;
      // console.log(starArr)
      starArr.forEach(item =>{
          var speed = 0.2 + (Math.random() * 1);
          var thisDistance = this.distance + (Math.random() * 300);
          item.style.transformOrigin = `0 0 ${thisDistance}px`;
          item.style.transform=`translate3d(0,0,-${thisDistance}px)
          rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed},${speed})`
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .people-main {
    .model-main {
      position: absolute;
      top: 0;
      overflow: auto;
      height: 1000px;
      width: 100%;
      padding: 12px 6px 0 6px;
      box-sizing: border-box;
      z-index: 99;
      .model-bg {
        display: flex;
        flex-wrap: wrap;
        >div{
          width: 33%;
          padding: 0 6px 12px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          >div{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            .imgs {
              width: 100%;
              height: 100%;
              img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                border-radius: 50%;
                opacity: .8;
              }
            }
            >div {
              position: absolute;
              font-size: 14px;
              bottom: 0;
              width: 100%;
              height: 30px;
              line-height: 26px;
              text-align: center;
              background-color: #00000069;
              color: #fff;
            }
          }
        }
      }
    }
    .start-main {
      overflow: hidden;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: radial-gradient(220% 105% at top center, #0f378c 10%, #5f63d6 40%, #6f73e9 65%, #578ceb);
      .stars{
        transform: perspective(500px);
        transform-style: preserve-3d;
        position: absolute;
        perspective-origin: 50% 100%;
        left:50%;
        animation: rotate 90s infinite linear;
        bottom: 0;
        .star{
          width: 3px;
          height: 3px;
          background: #f7f7b8;
          position: absolute;
          top: 0;
          left: 0;
          backface-visibility: hidden;
        }
      }
    }
    .people-list {
      width: 50%;
      box-sizing: border-box;
      cursor: pointer;
      &:nth-child(1n) {
        padding: 6px 6px 6px 12px;
      }
      &:nth-child(2n) {
        padding: 6px 12px 6px 6px;
      }
      .people-bg {
        // background-color: #3399ff;
        border-radius: 4px;
        padding: 12px;
        box-sizing: border-box;
        box-shadow: 1px 1px 2px 1px #ebedf0;
        >div:first-child {
          width: 100%;
          height: 150px;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          img {
            border-radius: 50%;
            width: 130px;
            height: 130px;
            object-fit: cover;
            display: block;
          }
        }
        >div:last-child {
          text-align: center;
        }
      }
    }
  }
  @keyframes rotate {
    0%{
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
    }
    100%{
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
    }
  }
</style>