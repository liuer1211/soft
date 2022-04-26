<template>
  <div class="type-main">
    <div class="model-list" v-for="(item,index) in list" :key="index" @click="toPage(item)">
      <div class="model-bg">
        <div>
          <img src="../../../../assets/images/imgmodel/001.png" alt="" />
        </div>
        <div>
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      list: [
        {
          img: '',
          title: '人物',
          type: 'people'
        },
        {
          img: '',
          title: '武功',
          type: 'kungfu'
        },
        {
          img: '',
          title: '门派',
          type: 'sect'
        },
        {
          img: '',
          title: '兵器',
          type: 'weapon'
        },
        {
          img: '',
          title: '其他',
          type: 'other'
        }
      ]
    }
  },
  mounted() {
    // console.log(this.list)
  },
  methods:{
    // 跳页面
    toPage(data) {
      switch(data.type) {
        case 'people':
          this.pagePush(data);
          break;
        case 'kungfu':
          Toast('暂未开通!');
          // this.pagePush(data);
          break;
        case 'sect':
          Toast('暂未开通!');
          // this.pagePush(data);
          break;
        case 'weapon':
          Toast('暂未开通!');
          // this.pagePush(data);
          break;
        case 'other':
          Toast('暂未开通!');
          // this.pagePush(data);
          break;  
        default:
          break;          
      }
    },
    // 跳转
    pagePush(data) {
      this.$router.push({
        name: data.type,
        params: {
          data
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .type-main {
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    .model-list {
      width: 50%;
      box-sizing: border-box;
      cursor: pointer;
      &:nth-child(1n) {
        padding: 0 6px 12px 12px;
      }
      &:nth-child(2n) {
        padding: 0 12px 12px 6px;
      }
      .model-bg {
        // background-color: #fff;
        border-radius: 4px;
        display: flex;
        align-items: center;
        // padding: 6px;
        box-sizing: border-box;
        box-shadow: 1px 1px 2px 1px #c3c3c3;
        background: linear-gradient(to left top, #b08cff, #ffffff);
        >div:first-child {
          width: 50px;
          min-width: 50px;
          height: 50px;
          border-radius: 4px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        }
        >div:last-child {
          padding: 0 0 0 12px;
          font-size: 16px;
        }
      }
    }
  }
</style>