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
          :id="item.active===active ? 'active':''"
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
        this.$emit('childFun', item);
        this.$nextTick(()=>{
          this.setCentert();
        })
      },
      setCentert() {
        // 外层整个tab
        let container = document.querySelector('.tabs-main-re')
        // 单个tab
        let activeNode = document.querySelector('.tabs-main-ab.active')
        // 元素距离滑块左边距离  -  居中时元素到窗口左边距离  =  滚动条滑动的距离
        let scrollWidth = activeNode.offsetLeft - (document.body.clientWidth-activeNode.clientWidth)/2
        container.scrollLeft = scrollWidth;
      },
    },
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
      box-shadow: 1px 1px 2px 1px #ebedf0;
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
        transition: .5s;
        .tabs-main-ab {
          position: relative;
          // padding: 0 8px;
          box-sizing: border-box;
          color: #646566;
          cursor: pointer;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          flex: 0 0 18%;
          height: 44px;
          line-height: 44px;
          text-align: center;
          &.active {
            color: #3399ff;
            transition: .5s;
          }
          &.active::after {
            position: absolute;
            content: '';
            bottom: 0;
            left: 14px;
            z-index: 1;
            height: 4px;
            width: 41px;
            background-color: #3399ff;
            border-radius: 20px;
            animation: .5s wid;
          }
        }
      }
    }
    @keyframes wid {
      0% {
        transform: scale(.3);
      }
      100% {
        transform: scale(1);
      }
    }
  }
</style>
