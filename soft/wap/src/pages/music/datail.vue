<template>
  <div class="m-detail-main">
    <div class="m-detail">
      <div class="m-cen-j" v-show="active==='1'">
        <div>
          <h2>简介</h2>
          <div>
            <div>
              <h2>印双人</h2>
              <span>六耳</span>
            </div>
          </div>
          <p>
            那一年，一个北方男孩对一个南方姑娘说：“等你到了我家，我带你去看看我们北方的大雪！”
          </P>
        </div>
      </div>
      <div class="m-cen-c" v-show="active==='2'">
        <div class="cen-main">
          <div class="cen-top">
            <h2>印双人</h2>
            <span>六耳</span>
          </div>
          <div class="cen-bot">
            <p>夜微凉</p>
            <p>月照窗</p>
            <p>轻舟过小桥</p>
            <p>倩影泛波光</p>
            <p>仙衣衬玉指 朱唇配红妆</p>
            <p>举止半含羞 柔情两相望</p>
            <p>曾经沧海 最是牵人肠</p>
            <p>地老天荒 终是将身藏</p><br/> 
            <p>窗外明月如常</p>
            <p>你我再见渺茫</p>
            <p>孤星依旧现微光</p>
            <p>而我只能将你深藏</p> 
            <p>晚风轻抚脸庞</p> 
            <p>刻意掀起过往</p> 
            <p>坐看星河两相傍</p> 
            <p>轻舟涟漪影成双</p><br/> 
            <p>风作响</p>
            <p>柳轻扬</p> 
            <p>刀剑掠残影</p> 
            <p>眉宇现寒光</p> 
            <p>古今名与利 好似梦一场</p> 
            <p>江湖多风雨 岁月显沧桑</p> 
            <p>锦袖一挥 断念隐街巷</p> 
            <p>拂尘而去 且将余生藏</p><br/> 
            <p>窗外明月如常</p> 
            <p>你我再见渺茫</p> 
            <p>孤星依旧现微光</p> 
            <p>而我只能将你深藏</p> 
            <p>晚风轻抚脸庞</p> 
            <p>刻意掀起过往</p> 
            <p>坐看星河两相傍</p> 
            <p>轻舟涟漪影成双</p>
          </div>
        </div>
      </div>
      <div class="m-cen-f" v-show="active==='3'">
        <div>
          <img src="" alt="">
          <div class="cen">
            <h2>印双人</h2>
            <span>六耳</span>
          </div>
        </div>
      </div>
    </div>
    <div @click="changeModel('1')" class="m-f one" :class="active==='1' ? 'active':''">简</div>
    <div @click="changeModel('2')" class="m-f two" :class="active==='2' ? 'active':''">词</div>
    <div @click="changeModel('3')" class="m-f three" :class="active==='3' ? 'active':''">封</div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        detail:{},
        active: '2'
      }
    },
    methods:{
      init(){
        this.detail = this.$route.query
      },
      changeModel(code){
        this.active = code;
      }
    },
    mounted(){
      this.init();
    }
  }
</script>

<style lang="less" scoped>
.m-detail-main{
  color: #fff;
  .m-detail{
    background: #807fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    font-size: 16px;
    text-align: center;
    >div{
      padding: 12px;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      overflow: auto;
      z-index: 3;
      animation: all 1s;
      >div{
      }
    }
    .m-cen-j{
      >div{
        h2{
          font-size:20px;
        }
        >div{
          padding: 20px 36px;
          box-sizing: border-box;
          >div{
            border:1px solid #fff;
            height: 80px;
            border-radius: 4px;
            line-height: 26px;
            h2{
              margin-top: 16px;
              font-size:18px;
            }
          }
        }
        p{
          font-size: 16px;
          line-height: 24px;
          text-align: initial;
          text-indent: 16px;
        }
      }
    }
    .m-cen-c{
      .cen-main{
        .cen-top{
          position: fixed;
          top: 0px;
          right: 0;
          left: 0;
          z-index: 4;
          text-align: center;
          padding: 12px 0 20px;
          background: #807fff;
          h2{
            font-size:20px;
            padding: 0 0 12px 0;
            box-sizing: border-box;
          }
          span{
            font-size:18px;
            color: #e4e4e4;
          }
        }
        .cen-bot{
          font-size:18px;
          padding-top: 80px;
          >p{
            padding: 4px 0;
          }
        }
      }
    }
    .m-cen-f{
      >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 0 0 0;
        img{
          width: 200px;
          height: 200px;
          object-fit: cover;
          background: #fff;
          overflow: hidden;
          border-radius: 50%;
        }
        .cen{
          padding: 30px 0 0 0;
          font-size: 20px;
          line-height: 30px;
          width:100%;
          overflow: hidden;
          h2{
            overflow: hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
          }
        }
      }
    }
  }
  .m-f{
    position: fixed;
    right: 12px;
    width: 25px;
    height: 25px;
    font-size: 12px;
    z-index: 9;
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
    border: 1px solid #d6d6d6;
    color: #d6d6d6;
    cursor: pointer;
    &.active{
      color: #FFF;
      border: 1px solid #FFF;
    }
    &.one{
      top: 20px
    }
    &.two{
      top: 60px
    }
    &.three{
      top: 100px
    }
  }
}
@keyframes all {
  0%{
    opacity: 0
  }
  100%{
    opacity: 100
  }
}
</style>