<template>
  <div class="model-main">
    <div class="model-List" v-for="(item,index) in list" :key="index" @click="goPage(item)">
      <div class="model-top" v-if="item.imgName">
        <!-- <img :src="getImg(item.imgName)" alt=""/> -->
        <img v-lazy="`http://180.76.106.221:5010/images/novel/${item.imgName}`" alt=""/>
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
    <Skeleton v-show="$store.state.common.isLoading"/>
  </div>
</template>

<script>
  import { reqQueryNovelList } from '@/axios/index' 
  import Skeleton from '@/components/skeleton'
  export default {
    components: {
      Skeleton
    },
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
        try {
          let params = {};
          let data = await reqQueryNovelList(params);
          // console.log('data=',data)
          if (data.responseCode && data.responseCode === '0000') {
            this.list = data.result;
            // console.log(this.list)
          }
        } catch(e) {
          console.log(e)
          this.list=[
              {
                  "id": 1,
                  "num": "0000001",
                  "title": "夜灵犀传奇",
                  "author": "六耳",
                  "titleTypeCode": "01,02",
                  "titleTypeName": "武侠/爱情",
                  "actDate": "20220522",
                  "instro": "年少热血气如虹，暮年病榻万事空。江湖纷争何时休，笑看痴人坠其中。",
                  "context": '<p>何为侠，总说行侠仗义。侠可谓助人为乐，此为侠之始也。路见不平，拔刀相助，此为侠之小成。穷则独善其身，达则兼济天下，此为侠之大者。</p><p>相传三国时期，铸剑名家欧冶子打造了三把赫赫有名的宝剑，分别是：黑曜、赤灵、素渊。传闻只要三者得其一便可得天下，而这三把宝剑也被魏蜀吴三国的君主各占其一。随着时代的更迭，这三把宝剑也辗转不知了去向。</p><p>几百年过去了，有传言这三把宝剑之一的黑曜在小重山现世。霎时间，江湖波澜四起。有传闻黑曜是最为妖邪的一柄剑，它还藏有一个更为惊人的秘密。</p><p>曾记得，十年前，一位年纪不满二十的少年横空出世，打破了沉寂已久的江湖，此人便是夜灵犀。没有人知道这少年从何处来，师承何门何派，只记得他只身一人前往少林，挑战主持方丈后全身而退。如今，黑曜现世，又将会带给他怎样的劫数。', 
                  "imgName": "1.jpg",
                  "videoName": "001.mp4",
                  "createTime": "2022-05-22 13:27:50",
                  "updateTime": "2022-07-15 14:45:27"
              }
          ];
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
      box-shadow: 1px 1px 2px 1px #f5f5f5;
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
          background-color: #ffbf41;
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