<template>
  <div class="model-main">
    <div class="model-List" v-for="(item,index) in list" :key="index" @click="goPage(item)">
      <div class="model-top" v-if="item.imgName">
        <!-- <img :src="getImg(item.imgName)" alt=""/> -->
        <img :src="`http://180.76.106.221:5010/images/novel/${item.imgName}`" alt=""/>
        <i>{{item.flag || 'hot'}}</i>
      </div>
      <div class="model-bot">
        <div>{{item.title}}</div>
        <div>作者：{{item.author}}</div>
        <div>{{item.titleTypeCode | novelTypeToNames}}</div>
        <!-- <div>{{item.titleTypeName}}</div> -->
        <div>{{item.createTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reqQueryNovelList } from '@/axios/index' 
  export default {
    data() {
      return {
        list: [
          {
            // actDate: "20220522"
            // author: "番茄"
            // context: null
            // createTime: "2022-05-22 13:27:50"
            // id: 1
            // imgName: "1.jpg"
            // instro: "夜灵犀传奇之邪见黑曜"
            // num: "0000001"
            // title: "夜灵犀传奇"
            // titleTypeCode: "01,02"
            // titleTypeName: "武侠/爱情"
            // updateTime: "2022-07-15 14:45:27"
            // videoName: ""
          }
        ],
      }
    },
    mounted() {
      this.getDate();
    },
    methods: {
      // 获取数据
      async getDate(){
        let params = {};
        let data = await reqQueryNovelList(params);
        // console.log(data)
        if (data.responseCode && data.responseCode === '0000') {
          this.list = data.result;
          // console.log(this.list)
        }
      },
      // 跳页面
      goPage(item){
        // console.log(item)
        // 使用path参数传不过来
        this.$router.push({
          name: 'novel',
          params: {
            data: item
          }
        })
      },
      // 动态拼接图片地址
      getImg(data) {
        if (data) {
          let img = require(`../../assets/images/novel/${data}`)
          return img;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .model-main {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 12px;
    .model-List{
      box-shadow: 1px 1px 2px 1px #e0e0e0;
      background-color: #fff;
      overflow: hidden;
      border-radius: 4px;
      width: 48%;
      margin-bottom: 12px;
      cursor: pointer;
      .model-top {
        position: relative;
        img {
          display: block;
          object-fit: cover;
          width: 170px;
          height: 200px;
        }
        i{
          position: absolute;
          top: 0;
          right: 0;
          background-color: #ffdd9a;
          padding: 2px;
          font-size: 12px;
          border-bottom-left-radius: 2px;
        }
      }
      .model-bot {
        padding: 4px 0;
        div {
          padding: 4px 8px;
          font-size: 12px;
          &:first-child{
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>