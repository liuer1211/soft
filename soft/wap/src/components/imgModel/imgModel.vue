<template>
  <div class="model-main">
    <div class="model-List" v-for="(item,index) in list" :key="index" @click="goPage(item)">
      <div class="model-top">
        <img :src="item.img" alt=""/>
        <i>{{item.flag}}</i>
      </div>
      <div class="model-bot">
        <div>{{item.title}}</div>
        <div>{{item.author}}</div>
        <div>{{item.date}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            id: '1',
            img: '../../assets/images/imgmodel/ylx.jpg',
            flag: 'hot',
            title: '夜灵犀传奇',
            author: '夜灵犀',
            date: '2020-02-02',
            link: 'yelingxi'
          }
        ]
      }
    },
    methods: {
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
      background-color: #43f5ab;
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
          background-color: #fbd754;
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
          }
        }
      }
    }
  }
</style>