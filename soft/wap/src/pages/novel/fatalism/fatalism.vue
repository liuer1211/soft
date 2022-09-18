<template>
  <div class="fatalism-main">
    <div class="fatalism-model">
      <div class="round" 
        v-for="(item, index) in list" 
        :key="index" 
        :style="{top:item.top+'%',left:item.left+'%'}"
        @click.stop="goPage(item)"
      ></div>
      <div class="info" 
        v-for="(item, index) in list" 
        :key="'id'+index" 
        :style="{top:item.topTip+'%',left:item.leftTip+'%'}"
        @click.stop="goPage(item)"
      >
        {{item.instro}}
      </div>
    </div>
    <div class="fat-fix">

    </div>
  </div>
</template>

<script>
import { reqQueryNovalAttributeList } from '@/axios/index' 
export default {
  data() {
    return {
      list: [
        // {
        //   top: 10,
        //   left: 10,
        //   topTip: 10-6,
        //   leftTip: 10-2,
        //   address: '少室山',
        //   descr: '初试江湖',
        //   name: '夜灵犀、恒叶方丈',
        //   code: '001'
        // },
        // {
        //   top: 20,
        //   left: 30,
        //   topTip: 20-6,
        //   leftTip: 30-2,
        //   address: '月与楼',
        //   descr: '香楼听曲',
        //   name: '夜灵犀、苏晚',
        //   code: '002'
        // },
        // {
        //   top: 30,
        //   left: 10,
        //   topTip: 30-6,
        //   leftTip: 10-2,
        //   address: '小重山',
        //   descr: '邪剑之争',
        //   name: '夜灵犀、李玉帛',
        //   code: '003'
        // },
        // {
        //   top: 50,
        //   left: 50,
        //   topTip: 50-6,
        //   leftTip: 50-2,
        //   address: '名剑山庄',
        //   descr: '山庄论剑',
        //   name: '夜灵犀、百里梦、妙乐',
        //   code: '004'
        // },
        // {
        //   top: 70,
        //   left: 50,
        //   topTip: 70-6,
        //   leftTip: 50-2,
        //   address: '小重山',
        //   descr: '风花雪月',
        //   name: '夜灵犀、风花雪月',
        //   code: '005'
        // },
        // {
        //   top: 90,
        //   left: 40,
        //   topTip: 90-6,
        //   leftTip: 40-2,
        //   address: '吉祥赌坊',
        //   descr: '投石问路',
        //   name: '夜灵犀、程瞎子、苏晚',
        //   code: '006'
        // }
      ]
    };
  },
  mounted() {
    // this.$nextTick(() => { 
    //   console.log(document.documentElement.clientHeight);
    // });
  },
  created() {
    // 初始数据
    this.getListDetail();
  },
  methods: {
    // 初始数据
    async getListDetail() {
      try {
        // 首页进入
        if (this.$route.params.id) {
          // 查询
          let list = await reqQueryNovalAttributeList({
            novalId: this.$route.params.id.toString(),
            attribute: this.$route.params.data.code
          });
          if (list.responseCode && list.responseCode === '0000') {
            this.list = list.result
            this.list.forEach((item,index) => {
              this.$set(item,'top',10*index+10)
              this.$set(item,'topTip',10*index+4)
              if (index%2===0) {
                this.$set(item,'left',15)
                this.$set(item,'leftTip',15-2)
              } else {
                this.$set(item,'left',70)
                this.$set(item,'leftTip',70-2)
              }
            });
            this.$store.dispatch('getNovelFatalismList',this.list)
          }
          // console.log(this.list)
        } else {
          // 详细页返回
          if (this.$store.state.novel.novelFatalismList && this.$store.state.novel.novelFatalismList.length) {
            this.list = this.$store.state.novel.novelFatalismList
          } else {
            this.$router.go(-1);
          }
        }
      } catch(e) {
        this.list = [{
          "id": '1',
          "name": "夜灵犀、恒叶方丈",
          "instro": "初试江湖",
          "descr": "",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "address": "少林寺",
          "sect": ""
        },{
          "id": '2',
          "name": "夜灵犀、百里梦、妙乐",
          "instro": "山庄论剑",
          "descr": "",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "address": "名剑山庄",
          "sect": ""
        },{
          "id": '3',
          "name": "夜灵犀、朱四爷",
          "instro": "秘密会谈",
          "descr": "",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "address": "月与楼",
          "sect": ""
        }]
        this.list.forEach((item,index) => {
          this.$set(item,'top',10*index+10)
          this.$set(item,'topTip',10*index+4)
          if (index%2===0) {
            this.$set(item,'left',15)
            this.$set(item,'leftTip',15-2)
          } else {
            this.$set(item,'left',70)
            this.$set(item,'leftTip',70-2)
          }
        });
        this.$store.dispatch('getNovelFatalismList',this.list)
      }
    },
   // 跳转
   goPage(data) {
    // console.log(data);
    this.$router.push({
      name: 'fatalismDetail',
      params: {
        data
      }
    })
   }
  },
};
</script>

<style lang="less" scoped>
  .fatalism-main {
    font-size: 14px;
    .fatalism-model {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 2;
      // background: linear-gradient(to top, #3932ff, #5d84dc);
      >div {
        position: absolute;
        background-color: #000;
        color: #fff;
        cursor: pointer;
        animation: toshow 2s;
        &.round {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #fff;
        }
        &.info {
          padding: 8px;
          box-sizing: border-box;
          border-radius: 4px;
          &::after {
            content: '';
            position: absolute;
            bottom: -9px;
            left: 12px;
            border: 5px solid #000;
            border-top-color: #000;
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
          }
        }
      }
    }
    .fat-fix {
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: 1;
      background: linear-gradient(to top, #3932ff, #5d84dc);
    }
  }
  
</style>