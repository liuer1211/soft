<template>
  <div class="type-main">
    <div class="model-list" v-for="(item,index) in list" :key="index" @click="toPage(item)">
      <div class="model-bg">
        <div>
          <img src="../../../../assets/images/imgmodel/null.png" alt="" />
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
import { reqQueryNovalDetail } from '@/axios/index' 
export default {
  data() {
    return {
      lists: [
        // '01','02'
        {
          img: '',
          title: '武学',
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
          title: '宿命',
          type: 'fatalism'
        },
        {
          img: '',
          title: '诗词歌赋',
          type: 'other'
        }
      ],
      li: {
        "01": {
          img: '',
          title: '人物',
          type: 'people',
          code: '01'
        },
        "02": {
          img: '',
          title: '武学',
          type: 'kungfu',
          code: '02'
        },
        "03": {
          img: '',
          title: '门派',
          type: 'sect',
          code: '03'
        },
        "04": {
          img: '',
          title: '兵器',
          type: 'weapon',
          code: '04'
        },
        "05": {
          img: '',
          title: '宿命',
          type: 'fatalism',
          code: '05'
        },
        "06": {
          img: '',
          title: '诗词歌赋',
          type: 'other',
          code: '06'
        },
      },
      list:[],
      id: undefined,
    }
  },
  watch: {
    // list: {
    //   handler(newName, oldName){
    //     this.list = newName.map((item)=>{
    //       return this.li[item]
    //     }) 
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  mounted() {
    // console.log(this.list)
  },
  created() {
    this.getListDetail();
  },
  methods:{
    // 获取数据，展示，存储
    async getListDetail(){
      // 首页进入
      if (this.$route.params.data) {
        // this.novelInfo = this.$route.params.data;
        let params = {
          novalId: this.$route.params.data.id.toString()
        }
        let data = await reqQueryNovalDetail(params);
        // console.log(data)
        if (data.responseCode && data.responseCode === '0000') {
          this.lists = data.novalAttributeList;
          this.id = data.result.id;
          this.getList(this.lists);
        }
        // 存入vuex
        this.$store.dispatch('getNovelTypeList',this.list)
      } else {
        // 详细页返回
        if (this.$store.state.novel.novelTypeList && this.$store.state.novel.novelTypeList.length) {
          this.list = this.$store.state.novel.novelTypeList;
        } else {
          // this.$router.go(-1);
        }
      }
    },
    getList(data) {
      this.list = data.map((item)=>{
        return this.li[item]
      })
      // console.log(this.list)
    },
    // 跳页面
    toPage(data) {
      switch(data.type) {
        case 'people':
          this.pagePush(data);
          break;
        case 'kungfu':
          // Toast('暂未开通!');
          this.pagePush(data);
          break;
        case 'sect':
          // Toast('暂未开通!');
          this.pagePush(data);
          break;
        case 'weapon':
          // Toast('暂未开通!');
          this.pagePush(data);
          break;
        case 'fatalism':
          // Toast('暂未开通!');
          this.pagePush(data);
          break; 
        case 'other':
          this.pagePush(data);
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
          data,
          id: this.id || this.$store.state.novel.novelInfo.id
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
      &:nth-child(1){
        .model-bg {
          background: linear-gradient(to left top, #bc5dff, #ba5cfd);
        }
      }
      &:nth-child(2){
        .model-bg {
          background: linear-gradient(to left top, #65f14e, #1ccb00);
        }
      }
      &:nth-child(3){
        .model-bg {
          background: linear-gradient(to left top, #3b87ed, #7699fb);
        }
      }
      &:nth-child(4){
        .model-bg {
          background: linear-gradient(to left top, #f1ef5c, #dfdb04);
        }
      }
      &:nth-child(5){
        .model-bg {
          background: linear-gradient(to left top, #706af5, #6863ff);
        }
      }
      &:nth-child(6){
        .model-bg {
          background: linear-gradient(to left top, #e9ce67, #e0b307);
        }
      }
      .model-bg {
        // background-color: #fff;
        border-radius: 4px;
        display: flex;
        align-items: center;
        // padding: 6px;
        box-sizing: border-box;
        box-shadow: 1px 1px 2px 1px #c3c3c3;
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