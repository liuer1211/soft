<template>
  <div class="draw-main">
    <div class="draw-one">
      <img class="img" :class="{active:isStart}" src="../../assets/images/article/2.png">
      <van-button type="primary" @click="start">开始抽签</van-button>
    </div>
    <div class="line">千里姻缘一线牵</div>
    <div class="draw-two" :class="{active:isCard}">
      <div class="card">
        <div class="card-top">
          <div>
            <img src="../../assets/images/article/3.png" alt="">
            <span>{{contextObj.type}}</span>
          </div>
          <div>第{{contextObj.num}}签</div>
        </div>
        <div class="card-bot">
          <div>
            <p>{{contextObj.text}}</p>
            <!-- <span class="date">{{newDate}}</span> -->
          </div>
          <div>签文</div>
        </div>
        <div class="d-but">
          <van-button class="dr" @click="toAnswer">解签</van-button>
        </div>
      </div>
      <div class="card fin" :class="{active:isAns}">
        <div>
          <p>{{contextObj.info}}</p>
        </div>
        <van-icon name="close" @click="close"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {listMath} from './draw.js'
  export default {
    data () {
      return {
        isStart: false,
        isCard: false,
        isAns: false,
        contextObj:{},
        newDate: '',
      }
    },
    methods: {
      // 开始抽签
      start() {
        if(this.isStart) return;
        this.isStart = true;
        setTimeout(()=>{
          this.isStart = false;
          this.isCard = true;
        },3000)
        this.contextObj = this.getContext();
        this.contextObj.type = this.contextObj.type.slice(0,2);
        // console.log(this.contextObj)
        this.getDate();
      },
      // 随即获取回复
      getContext() {
        try {
          let index = Math.ceil((Math.random()*100)/4);
          // console.log(index);
          let context = listMath(index);
          return context;
        } catch(e) {
          console.log(e);
          return '';
        }
      },
      // 获取当前时间
      getDate() {
        let date= this.getNowTime();
        let arr = date.split('');
        let newArr = arr.map(item=>{
          return this.getUp(item)
        })
        this.newDate = newArr.join('');
        // console.log(this.getNowTime())
      },
      //获取当前时间
      getNowTime() {
        var date = new Date();//年 getFullYear()：四位数字返回年份
        var year = date.getFullYear();  //getFullYear()代替getYear()
        var month = date.getMonth() + 1;//月 getMonth()：0 ~ 11
        var day = date.getDate();//日 getDate()：(1 ~ 31)
        var hour = date.getHours(); //时 getHours()：(0 ~ 23)
        var minute = date.getMinutes(); //分 getMinutes()： (0 ~ 59)
        var second = date.getSeconds();//秒 getSeconds()：(0 ~ 59)
        var time = year + '年' + this.addZero(month) + '月' + this.addZero(day)+ '日';
        return time;
      },
      //小于10的拼接上0字符串
      addZero(s) {
        return s < 10 ? ('0' + s) : s;
      },
      getUp(val){
        if(val){
          switch(val) {
            case '0':
              return '零';
            case '1':
              return '一';
            case '2':
              return '二';
            case '3':
              return '三';
            case '4':
              return '四';
            case '5':
              return '五'; 
            case '6':
              return '六';
            case '7':
              return '七';
            case '8':
              return '八';
            case '9':
              return '九';
            default:
              return val;
          }
        } else {
          return '';
        }
      },
      // 解签
      toAnswer() {
        this.isAns = true;
      },
      // 关闭
      close(){
        this.isCard = false;
        this.isAns = false;
      }
    },
    mounted(){
    },
  }
</script>

<style scoped lang="less">
  .draw-main{
    .draw-one{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 100px 0 0 0;
      .img{
        width: 75px;
        height: 100%;
        object-fit: cover;
        display: block;
        &.active{
          animation: anima 3s linear infinite;
        }
      }
    }
    .line{
      text-align: center;
      margin-top: 50px;
      font-size: 22px;
      font-weight: 300;
      font-family: cursive;
      color: #f00;
    }
    .draw-two{
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      // display: flex;
      justify-content: center;
      align-items: center;
      display: none;
      &.active{
        display: flex;
      }
      .card{
        overflow: hidden;
        position: absolute;
        background: #ffd45c;
        width: 300px;
        height: 600px;
        border-radius: 0.10667rem;
        box-shadow: 1px 1px 2px 2px #f0f0f0;
        animation: hei 1s;
        padding: 20px;
        box-sizing: border-box;
        font-size: 22px;
        font-family: cursive;
        font-weight: 600;
        z-index: 8;
        .card-top{
          display: flex;
          justify-content: flex-end;
          >div{
            height: 150px;
            &:first-child{
              width: 80%;
              text-align: center;
              position: relative;
              img{
                width: 100px;
                height: 100px;
                object-fit: cover;
              }
              span{
                position: absolute;
                width: 100px;
                top: 40px;
                left: 55px;
                color: #fc071d;
              }
            }
            &:last-child{
              width: 20%;
              writing-mode: vertical-rl;
            }
          }
        }
        .card-bot{
          display: flex;
          justify-content: flex-end;
          height: 300px;
          >div{
            &:first-child{
              width: 80%;
              display: flex;
              justify-content: flex-end;
              position: relative;
              p{
                writing-mode: vertical-rl;
                line-height: 35px;
              }
              .date{
                position: absolute;
                top: 0;
                left: 0;
                writing-mode: vertical-rl;
                font-size: 16px;
              }
            }
            &:last-child{
              font-weight: bold;
              width: 20%;
              writing-mode: vertical-rl;
            }
          }
        }
        .d-but{
          margin-top: 68px;
          .dr{
            width: 100%;
            font-size: 18px;
            background-color: #ebebeb;
            border: 1px solid #ff9494;
            color: #000;
            cursor: pointer;
          }
        }
        &.fin{
          display: none;
          &.active{
            display: block;
          }
          >div{
            display: flex;
            justify-content: flex-end;
            p{
              writing-mode: vertical-rl;
              line-height: 35px;
              height: 530px;
              overflow-x: auto;
              overflow-y: hidden;
            }
          }
          /deep/ .van-icon{
            position: absolute;
            right: 48%;
            bottom: 8px;
            cursor: pointer;
          }
        }
      }
    }
  }
  /deep/ .van-button--primary {
    margin-top: 20px;
    color: #fff;
    background-color: #fbb953;
    border: 0.02667rem solid #fbb953;
    cursor: pointer;
  }
  @keyframes anima{ 
    10% { 
      transform: rotate(15deg); 
    } 
    20% { 
      transform: rotate(-15deg); 
    } 
    30% { 
      transform: rotate(15deg); 
    } 
    40% { 
      transform: rotate(-15deg); 
    } 
    50%{ 
      transform: rotate(15deg); 
    }
    60%{ 
      transform: rotate(-15deg); 
    } 
    70%{ 
      transform: rotate(15deg); 
    } 
    80%{ 
      transform: rotate(-15deg); 
    } 
    90%{ 
      transform: rotate(15deg); 
    } 
    100% { 
      transform: rotate(0deg); 
    } 
  } 
  @keyframes hei{
    from{
      height: 0;
      opacity: 0.7;
    }
    to{
      height: 600px;
      opacity: 1;
    }
  }
</style>
