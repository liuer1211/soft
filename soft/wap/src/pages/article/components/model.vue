<template>
  <div class="model-main">
    <div class="model-bg">
      <div class="model-list" v-for="(item,index) in list" :key="index" @click="toPage(item)">
        <div>
          <img :src="getImg(item.img)" alt="">
        </div>
        <div>
          <div class="top">
            <h2>{{item.title}}</h2>
            <p>{{item.des}}</p>
          </div>
          <div class="bottom">
            <span>{{item.name}}</span>
            <span>{{item.date}}</span>
          </div>
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
      }
    },
    mounted() {
    },
    methods: {
      // 动态拼接图片地址
      getImg(data) {
        if(data) {
          let img = require(`../../../assets/images/imgmodel/${data}`)
          return img;
        }
      },
      // 跳页面
      toPage(data) {
        console.log(data)
        this.$router.push({
          name: 'articleDetail',
          params: {
            data
          }
        })
      }
    }
  }
</script>

<style lang='less' scoped>
  .model-main {
    font-size: 16px;
    .model-bg {
      padding: 0 12px;
      box-sizing: border-box;
      cursor: pointer;
      .model-list {
        &:not(:last-child){
          margin-bottom: 12px;
        }
        border-radius: 4px;
        background-color: #fff;
        overflow: hidden;
        display: flex;
        cursor: pointer;
        box-shadow: 1px 1px 2px 1px #ebedf0;
        >div:first-child{
          width: 80px;
          min-width: 80px;
          height: 80px;
          >img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        }
        >div:last-child{
          flex: 1;
          padding: 8px 10px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          >.top{
            >h2{
              font-weight: 600;
              font-size: 17px;
              padding-bottom: 8px;
              box-sizing: border-box;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              word-break: break-all;
            }
            p{
              font-size: 15px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              word-break: break-all;
            }
          }
          >.bottom{
            font-size: 13px;
            span{
              padding: 0 8px 0 0;
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
</style>