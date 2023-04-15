<template>
  <div class="user-main">
    <div class="user-top">
      <div class="t-one">
        <div class="t-one-l">
          <h2>{{userInfo.account}}</h2>
          <p>IP:上海</p>
        </div>
        <div class="t-one-r">
          <img src="../../assets/images/index/logo.png" art="头像"/>
        </div>
      </div>
      <div class="t-two">
        <div v-for="(item,index) in tabList" :key="index">
          <span>{{item.name}}</span>
          <p v-if="item.type==='01'">{{item.typeVal}}</p>
          <p v-if="item.type==='02'">
            <CountTo
              :startVal='item.startVal'
              :endVal='item.endVal'
              duration='2000'
            />
          </p>
        </div>
        <!-- <div>
          <span>关注</span>
          <p>121</p>
        </div>
        <div>
          <span>点赞</span>
          <p>
            <CountTo
              :startVal='startVal'
              :endVal='endVal'
              :duration='duration'
            />
          </p>
        </div>
        <div>
          <span>收藏</span>
          <p>12</p>
        </div> -->
      </div>
      <div class="t-three">
        <div class="t-three-l">
          <span>邀请好友</span>
          <div>立即邀请好友，解锁更多功能</div>
        </div>
        <div class="t-three-r">
          <div>邀请</div>
        </div>
      </div>
    </div>
    <div class="user-tool">
      <div class="bg">
        <div class="font">常用功能</div>
        <van-grid :column-num="4" :border="false">
          <van-grid-item v-for="(value,i) in list" :key="i" :icon="value.icon" :text="value.name" />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
  import CountTo from 'vue-count-to'
  export default {
    components: {
      CountTo
    },
    data() {
      return {
        userInfo:'',
        list: [
          {
            name: '设置',
            icon: 'setting-o'
          },
          {
            name: '音乐',
            icon: 'service-o'
          },
          {
            name: '购物车',
            icon: 'shopping-cart-o'
          },
          {
            name: '收藏',
            icon: 'star-o'
          },
          {
            name: '关注',
            icon: 'like-o'
          },
          {
            name: '礼物',
            icon: 'gift-o'
          }
        ],
        tabList: [
          {
            name: "今日足迹",
            type: '01',
            typeVal: '神行千里',
          },
          {
            name: "点赞",
            type: '02',
            startVal: 0,
            endVal: 121,
          },
          {
            name: "关注",
            type: '02',
            startVal: 0,
            endVal: 322,
          },
          {
            name: "收藏",
            type: '02',
            startVal: 0,
            endVal: 34,
          }
        ]
      }
    },
    created() {
      this.getUserInfo();
    },
    methods:{
      getUserInfo(){
        let user = localStorage.getItem('userid') || "{}";
        this.userInfo = JSON.parse(user)
      }
    }
  }
</script>

<style lang="less" scoped>
  .user-main{
    .user-top{
      padding: 12px;
      box-sizing: border-box;
      font-size: 16px;
      background: linear-gradient(to bottom,#aec8ff,#fafafa);
      .t-one{
        display: flex;
        justify-content: space-between;
        padding: 12px 0;
        box-sizing: border-box;
        .t-one-l{
          width: 300px;
          >h2{
            font-size: 20px;
          }
          >p{
            font-size: 12px;
            margin-top: 8px;
            color: #747474;
          }
        }
        .t-one-r{
          width: 40px;
          min-width: 40px;
          height: 40px;
          background: #080808;
          overflow: hidden;
          border-radius: 50%;
          display: flex;
          cursor: pointer;
          img{
            width: 40px;
            height: 40px;
            object-fit: cover;
          }
        }
      }
      .t-two{
        display: flex;
        padding: 14px 0 20px;
        box-sizing: border-box;
        cursor: pointer;
        div{
          width: 33.33%;
          display: flex;
          flex-direction: column;
          position: relative;
          &:not(:last-child)::after{
            content: '';
            border-left: 1px solid #c9c9c9;
            position: absolute;
            height: 26px;
            right: 8px;
            top: 2px;
          }
          >span{
            color: #747474;
            font-size: 14px;
          }
          >p{
            margin-top: 6px;
            width: 90px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 12px;
          }
        }
      }
      .t-three{
        background: #3399ff;
        border-radius: 8px 8px 0 0;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        color: #fff;
        .t-three-l{
          flex: 1;
          >span{
            font-weight: 700;
            font-size: 18px;
            color: #ffd948;
          }
          >div{
            font-size: 14px;
            margin-top: 6px;
          }
        }
        .t-three-r{
          width: 50px;
          min-width: 50px;
          position: relative;
          cursor: pointer;
          >div{
            background: #fcebad;
            padding: 6px 12px;
            border-radius: 28px;
            font-size: 12px;
            color: #ff9710;
            position: absolute;
            top: 6px;
          }
        }
      }
    }
    .user-tool{
      padding: 0 12px;
      box-sizing: border-box;
      font-size: 14px;
      .bg {
        box-shadow: 0 8px 12px #ebedf0;
        overflow: hidden;
        border-radius: 4px;
        background: #fff;
        
      }
      .font{
        padding: 12px;
        box-sizing: content-box;
        font-weight: 700;
      }
      .van-grid{
        cursor: pointer;
      }
    }
  }
</style>