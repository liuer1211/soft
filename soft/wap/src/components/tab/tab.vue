<template>
  <!-- 是否粘性 -->
  <div class="tabs-main">
    <!-- 高宽 -->
    <div class="tabs-main-w">
      <!-- flex 滚动-->
      <div class="tabs-main-re">
        <!-- tab-->
        <div class="tabs-main-ab" 
          v-for="(item,index) in list" 
          :key="index" 
          :class="item.active===active ? 'active':''"
          @click="getTab(item)"
        >
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default: ()=>[]
      }
    },
    data() {
      return {
        active: '1',
      }
    },
    methods: {
      getTab(item) {
        this.active = item.active;
      }
    }
  }
</script>

<style lang="less" scoped>
  .tabs-main{
    font-size: 16px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
    .tabs-main-w {
      cursor: pointer;
      overflow: hidden;
      position: relative;
      height: 44px;
      line-height: 44px;
      .tabs-main-re {
        overflow: hidden;
        overflow-x: auto;
        height: 100%;
        padding-bottom: 10px;
        box-sizing: content-box;
        position: relative;
        display: flex;
        background-color: #fff;
        user-select: none;
        .tabs-main-ab {
          position: relative;
          padding: 0 8px;
          box-sizing: border-box;
          color: #646566;
          cursor: pointer;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          flex: 0 0 20%;
          height: 44px;
          line-height: 44px;
          text-align: center;
          &.active {
            color: #3399ff;
          }
          &.active::after {
            position: absolute;
            content: '';
            bottom: 0;
            left: 16px;
            z-index: 1;
            height: 4px;
            width: 50px;
            background-color: #3399ff;
            border-radius: 20px;
            // transition: .5s width;
            // transform: scale(.8);
          }
        }
      }
    }
  }
</style>
