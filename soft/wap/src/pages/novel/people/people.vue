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
              {{substr(item.name)}}
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
          name: '夜灵犀'
        },
        {
          id: '',
          img: '',
          name: '苏晚'
        },
        {
          id: '1',
          img: '',
          name: '百里梦'
        },
        {
          id: '',
          img: '',
          name: '妙乐'
        },
        {
          id: '',
          img: '',
          name: '冷面剑客'
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
    },
    // 截取 拼接
    substr(data) {
      if (data.length>3){
        return data.substr(0, 3) + '...'
      } else {
        return data;
      }
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
              background : -webkit-radial-gradient(50% 120%, circle cover, #000000cc, #000000b0, #000000ab);;
              background : -moz-radial-gradient(50% 120%, circle cover, #000000cc, #000000b0, #000000ab);;
              background : radial-gradient(50% 120%, circle cover, #000000cc, #000000b0, #000000ab);;
              &::before{
                content :  "" ;
                position :  absolute ;
                background: -webkit-radial-gradient( 50%  120% ,  circle  cover, rgba( 255 ,  255 ,  255 ,  0.5 ), rgba( 255 ,  255 ,  255 ,  0 )  70% );
                border-radius:  50% ;
                bottom :  2.5% ;
                left :  5% ;
                opacity:  0.6 ;
                height :  100% ;
                width :  90% ;
                -webkit-filter: blur( 5px );
                z-index :  2 ;
              }
              img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                border-radius: 50%;
                opacity: .3;
              }
            }
            >div:last-child {
              position: absolute;
              font-size: 14px;
              bottom: 0;
              width: 100%;
              height: 30px;
              line-height: 22px;
              text-align: center;
              // background-color: #00000069;
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