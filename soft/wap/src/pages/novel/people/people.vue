<template>
  <div class="people-main">
    <div class="people-list" v-for="(item,index) in list" :key="index" @click="toPage(item)">
      <div class="people-bg">
        <div>
          <img :src="item.img" alt=""/>
        </div>
        <div>
          <span>{{item.title}}</span>
        </div>
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
      ]
    }
  },
  mounted() {
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
    }
  }
}
</script>

<style lang="less" scoped>
  .people-main {
    font-size: 16px;
    box-sizing: border-box;
    padding: 6px 0;
    display: flex;
    flex-wrap: wrap;
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
        background-color: #3399ff;
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
          align-items: center;
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
</style>