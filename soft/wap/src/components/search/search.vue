<template>
  <div class="search-main" :class="isShow ? 'active' : ''">
    <div class="search-head">
      <div @click="showModel">
        <!-- <van-icon name="apps-o" /> -->
        <i class="iconfont icon-nav-list"></i>
      </div>
      <div>
        <van-search v-model="searchValue" :placeholder="placeholder" />
      </div>
    </div>
    <van-popup v-model="show" position="left" teleport="#search-main" :style="{ width: '50%',height: '100%' }">
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
        <div class="pop-center">
          用户
        </div>
      </div>
    </van-popup>
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
      }
    },
    watch: {
      // 监听搜索关键字
      searchValue(newName, oldName) {
        // console.log(newName, oldName)
        // 节流搜索
        getList(newName);
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .search-main {
    position:absolute;
    top: 0;
    width: 100%;
    display: none;
    &.active {
      display: block;
    }
    .search-head {
      display: flex;
      align-items: center;
      >div:first-child {
        display: flex;
        width: 24px;
        padding: 0 0 0 8px;
        cursor: pointer;
        .iconfont {
          &.icon-nav-list {
            font-size: 26px;
          }
        } 
      }
      >div:last-child {
        flex: 1;
      }
    }
    /deep/ .van-popup {
      &.van-popup--left {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
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
            padding: 2px 0;
          }
          span {
            font-size: 12px;
          }
        }
      }
      .pop-center {
        padding: 12px 12px;
      }
    }
  }
</style>