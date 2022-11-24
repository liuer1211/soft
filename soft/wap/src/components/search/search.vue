<template>
  <div class="search-main" :class="isShow ? 'active' : ''">
    <div class="search-head">
      <div @click="showModel">
        <i class="iconfont icon-nav-list"></i>
      </div>
      <div>
        <van-search v-model="searchValue" :placeholder="placeholder" />
      </div>
      <!-- <div @click="rShow = !rShow">
        <i class="iconfont icon-rightalignment"></i>
      </div> -->
    </div>
    <!-- 左侧菜单 -->
    <van-popup v-model="show" position="left" teleport="#search-main" :style="{ width: '56%',height: '100%' }">
      <div class="pop-main">
        <div class="pop-top">
          <div>
            <img src="../../assets/images/index/logo.png" alt=""/>
          </div>
          <div>
            <h1>好剧优享</h1>
            <span>一片青莲照人间</span>
          </div>
        </div>
        <!-- <van-icon name="manager-o" /> -->
        <div>
          <div class="pop-center" v-for="(item,index) in list" :key="index" @click.stop="toPages(item)">
            <div>
              <van-icon :name="item.icon" />
            </div>
            <div>{{item.title}}</div>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 右侧类别 -->
    <div class="search-type">
      <van-popup v-model="rShow" position="right" teleport="#search-type" :style="{ width: '50%',height: '100%' }">
        132
      </van-popup>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      searchVal: {
        type: String,
        default: '',
      },
      isShow: {
        type: Boolean,
        default: true,
      }
    },
    data() {
      return {
        searchValue: this.searchVal,
        placeholder: '今日热词：剧本',
        show: false,
        rShow: false,
        list: [
          {
            title: "文章",
            url: "article",
            icon: "description"
          },
          {
            title: "解忧",
            url: "chat",
            icon: "manager-o"
          },
          // {
          //   title: "用户",
          //   url: "user",
          //   icon: "user-o"
          // },
          {
            title: "游戏",
            url: "game",
            icon: "vip-card-o"
          },
        ]
      }
    },
    watch: {
      // 监听搜索关键字
      searchValue(newName, oldName) {
        console.log(newName, oldName)
        // 节流搜索
        this.getList(newName);
      }
    },
    methods: {
      // 搜索
      getList(newName) {
        // 
      },
      // 展示左侧弹框
      showModel() {
        this.show = true;
      },
      // 跳页面
      toPages(item) {
        if(item.url === 'game'){
          window.location.href = 'http://180.76.106.221/html/index.html';
          return;
        }
        this.$router.push({
          name: item.url
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .search-main {
    position: relative;
    position:fixed;
    top: 0;
    width: 100%;
    height: 54px;
    display: none;
    background-color: #fff;
    z-index: 999;
    &.active {
      display: block;
    }
    .search-head {
      display: flex;
      align-items: center;
      background-color: #3399ff;
      >div:first-child {
        display: flex;
        width: 24px;
        padding: 0 0 0 8px;
        cursor: pointer;
        .iconfont {
          &.icon-nav-list {
            font-size: 26px;
            color: #fff;
          }
        } 
      }
      >div:nth-child(2) {
        flex: 1;
      }
      >div:last-child {
        width: 24px;
        padding: 0 8px 0 0;
        cursor: pointer;
        .iconfont {
          &.icon-rightalignment {
            font-size: 26px;
          }
        }
        // background-color: #3399ff;
      }
    }
    /deep/ .van-search{
      background-color: #3399ff;
    }
    /deep/ .van-popup {
      &.van-popup--left {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &.van-popup--right {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
    }
    .pop-main {
      font-size: 16px;
      .pop-top {
        display: flex;
        padding: 12px;
        box-sizing: border-box;
        background-color: #3399ff;
        color: #fff;
        >div:first-child {
          img {
            width: 40px;
            min-width: 40px;
            height: 40px;
          }
        }
        >div:last-child {
          padding-left: 10px;
          h1 {
            padding: 4px 0;
            box-sizing: border-box;
          }
          span {
            font-size: 12px;
          }
        }
      }
      .pop-center {
        padding: 14px 12px;
        box-sizing: border-box;
        display: flex;
        cursor: pointer;
        align-items: center;
        >div:first-child{
          width: 30px;
          i{
            font-size: 24px;
          }
        }
        >div:last-child{
          position: relative;
          flex: 1;
          &::after{
            position: absolute;
            bottom: -16px;
            left: 0;
            width: 100%;
            content: "";
            border-bottom: 1px solid #d5d5d5;
          }
        }
      }
    }
    /deep/ .van-field__left-icon {
      display: none;
    }
    .search-type {
      position: relative;
      // position: absolute;
      // top: 53px;
      // left: 0;
      // right: 0;
      // padding: 12px;
      // // background-color: #fff;
      // // box-shadow: 1px 1px 2px 1px #ebedf0;
      /deep/ .van-overlay {
        position: fixed;
        // top: 53px;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.7);
        // z-index: 99!important;
      }
      /deep/ .van-popup--top{
        top: 53px;
        // z-index: 99!important;
      }
      /deep/ .van-popup{
        // -webkit-transition: -webkit-transform .3s ease-out;
        // transition: -webkit-transform .3s ease-out;
        // transition: transform .3s ease-out;
        // transition: transform .3s ease-out,-webkit-transform .3s ease-out;
        // -webkit-transform: '';
        // transform: "";
        // transform: translateY(53)
      }
    }
  }
</style>