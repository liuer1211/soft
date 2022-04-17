<template>
  <div class="model-main">
    <div class="model-List" v-for="(item,index) in list" :key="index" @click="goPage(item)">
      <div class="model-top">
        <img src="../../assets/images/imgmodel/001.png" alt=""/>
        <i>{{item.flag}}</i>
      </div>
      <div class="model-bot">
        <div>{{item.title}}</div>
        <div>作者：{{item.author}}</div>
        <div>{{item.type}}</div>
        <div>{{item.date}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reqNovelList } from '@/axios/index'
  export default {
    data() {
      return {
        list: []
      }
    },
    mounted() {
      this.getDate();
    },
    methods: {
      // 获取数据
      async getDate(){
        let data = await reqNovelList();
        if (data.data && data.data.code === '200') {
          this.list = data.data.data;
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
      box-shadow: 1px 1px 2px 1px #ebedf0;
      // background-color: #3399ff;
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