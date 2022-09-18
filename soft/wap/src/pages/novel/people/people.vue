<template>
  <div class="people-main">
    <div class="model-main">
      <div class="model-bg">
        <div v-for="(item,index) in list" :key="index">
          <div @click="toPage(item)">
            <div class="imgs">
              <!-- <img :src="getImg(item.img)" alt=""/> -->
            </div>
            <div>
              {{substr(item.name)}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="start-main">
      <div class="stars">
        <div @click="index" v-for="(item,index) in statrsCount" :key="index" ref="star" class="star"/>
      </div>
    </div>
    <!-- 右侧浮框 -->
    <RightModel></RightModel>
  </div>
</template>

<script>
import RightModel from '@/components/rightModel/rightModel'
import { reqQueryNovalAttributeList } from '@/axios/index' 
export default {
  components: {
    RightModel
  },
  data() {
    return {
      num: '',
      list: [
        // {
        //   id: '1',
        //   img: 'null.png',
        //   name: '夜灵犀',
        //   menpai: '燕云山庄',
        //   gongfu: '燕云七绝、乾坤生死诀、扶摇九天',
        //   miaoshu: '',
        //   shiji: '年少成名，一手绝技独步江湖。对于他的本事，江湖中人都是这样流传的“锦绣一挥，神佛难挡”。'
        // },
        // {
        //   id: '2',
        //   img: '2.jpg',
        //   name: '苏晚',
        //   menpai: '魔教',
        //   gongfu: '魅影迷踪、弹指沁音',
        //   miaoshu: '',
        //   shiji: ''
        // },
        // {
        //   id: '3',
        //   img: 'null.png',
        //   name: '百里梦',
        //   menpai: '名剑山庄',
        //   gongfu: '昔月剑法',
        //   miaoshu: '',
        //   shiji: ''
        // },
        // {
        //   id: '4',
        //   img: 'null.png',
        //   name: '妙乐',
        //   menpai: '少林寺',
        //   gongfu: '伏魔功',
        //   miaoshu: '',
        //   shiji: ''
        // },
        // {
        //   id: '5',
        //   img: 'null.png',
        //   name: '李玉帛',
        //   menpai: '正威镖局',
        //   gongfu: '燕云七绝、陆家剑法',
        //   miaoshu: '',
        //   shiji: ''
        // },
        // {
        //   id: '6',
        //   img: 'null.png',
        //   name: '陆秋艳',
        //   menpai: '正威镖局',
        //   gongfu: '陆家剑法',
        //   miaoshu: '',
        //   shiji: ''
        // },
        // {
        //   id: '7',
        //   img: 'null.png',
        //   name: '陆秋荣',
        //   menpai: '正威镖局',
        //   gongfu: '陆家剑法',
        //   miaoshu: '',
        //   shiji: ''
        // },
        // {
        //   id: '8',
        //   img: 'null.png',
        //   name: '李怀唐',
        //   menpai: '魔教',
        //   gongfu: '魅影迷踪、断魂掌',
        //   miaoshu: '',
        //   shiji: ''
        // },
        // {
        //   id: '9',
        //   img: 'null.png',
        //   name: '陈瞎子',
        //   menpai: '门派不详',
        //   gongfu: '扶摇九天、卜卦',
        //   miaoshu: '',
        //   shiji: ''
        // },
        // {
        //   id: '10',
        //   img: 'null.png',
        //   name: '风花雪月',
        //   menpai: '门派不详',
        //   gongfu: '箫、剑、折扇、暗器',
        //   miaoshu: '',
        //   shiji: ''
        // },
        // {
        //   id: '11',
        //   img: 'null.png',
        //   name: '落梅',
        //   menpai: '别离门',
        //   gongfu: '妙手回春',
        //   miaoshu: '',
        //   shiji: ''
        // },
      ],
      statrsCount:800,//星星数量
      distance:1000,//间距
      sectList: [], // 门派
      kungfuList: [] // 功夫
    }
  },
  mounted() {
    this.getStar();
  },
  created() {
    // // 判断小说编号是否存在
    // if (this.$store.state.novel.novelInfo && this.$store.state.novel.novelInfo.num) {
    //   // 查询初始数据
    //   this.getInitData();
    // } else {
    //   this.$router.go(-1);
    // }
    // console.log(this.$route.params);
    this.getListDetail();
  },
  methods:{
    // // 查询
    // getInitData() {
    //   this.num = this.$store.state.novel.novelInfo.num;
    //   if (this.num) {
    //   }
    // },
    async getListDetail() {
      try {
        // 首页进入
        if (this.$route.params.id) {
          // 查询门派
          let res1 = await reqQueryNovalAttributeList({
            novalId: this.$route.params.id.toString(),
            attribute: '03'
          });
          if (res1.responseCode && res1.responseCode === '0000') {
            this.sectList = res1.result;
            this.$store.dispatch('getNovelSectList',this.sectList)
          }
          // 查询功夫
          let res2 = await reqQueryNovalAttributeList({
            novalId: this.$route.params.id.toString(),
            attribute: '02'
          });
          if (res2.responseCode && res2.responseCode === '0000') {
            this.kungfuList = res2.result;
            this.$store.dispatch('getNovelKungfuList',this.kungfuList)
          }
          // console.log(this.$route.params)
          // 查人物
          let params = {
            novalId: this.$route.params.id.toString(),
            attribute: this.$route.params.data.code
          }
          let data = await reqQueryNovalAttributeList(params);
          if (data.responseCode && data.responseCode === '0000') {
            this.list = data.result;
            // this.getList(this.lists);
          }
          // 存入vuex
          this.$store.dispatch('getNovelPeopleList',this.list)
        } else {
          // 详细页返回
          if (this.$store.state.novel.novelPeopleList && this.$store.state.novel.novelPeopleList.length) {
            this.list = this.$store.state.novel.novelPeopleList;
          } else {
            this.$router.go(-1);
          }
        }
      } catch(e) {
        this.sectList = [{
          "id": 1,
          "name": "燕云山庄",
          "instro": "",
          "descr": "四面环山，云雾缭绕，日出映月",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "kungFu": "",
          "sect": ""
        }]
        this.$store.dispatch('getNovelSectList',this.sectList)

        this.kungfuList = [{
          "id": '3',
          "name": "乾坤生死决",
          "instro": "",
          "descr": "",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "kungFu": "",
          "sect": ""
        },{
          "id": '4',
          "name": "燕云七绝",
          "instro": "",
          "descr": "",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "kungFu": "",
          "sect": ""
        },{
          "id": '5',
          "name": "扶摇九天",
          "instro": "",
          "descr": "",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "kungFu": "",
          "sect": ""
        }
        ]
        this.$store.dispatch('getNovelKungfuList',this.kungfuList)

        this.list = [{
          "id": '1',
          "name": "夜灵犀",
          "instro": "孑然一身真洒脱，寻欢作乐苦笑颜。世间哪得知心人，万卷愁云映眼帘。",
          "descr": "",
          "img": "22.jpg",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "kungFu": "3,4,5",
          "sect": "1"
        }];
        this.$store.dispatch('getNovelPeopleList',this.list)
      }
    },
    // 跳页面
    toPage(data) {
      this.$router.push({
        name: 'peopleDetail',
        params: {
          data
        }
      })
    },
    // 背景
    getStar() {
      let starArr = this.$refs.star;
      // console.log(starArr)
      starArr.forEach(item =>{
          var speed = 0.2 + (Math.random() * 1);
          var thisDistance = this.distance + (Math.random() * 300);
          item.style.transformOrigin = `0 0 ${thisDistance}px`;
          item.style.transform=`translate3d(0,0,-${thisDistance}px)
          rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed},${speed})`
      })
    },
    // 截取 拼接
    substr(data) {
      if (data.length>4){
        return data.substr(0, 4) + '...'
      } else {
        return data;
      }
    },
    // 动态拼接图片地址
    getImg(data) {
      if (data) {
        let img = require(`../../../assets/images/imgmodel/${data}`)
        return img;
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .people-main {
    .model-main {
      position: absolute;
      top: 0;
      // overflow: auto;
      width: 100%;
      padding: 12px 6px 0 6px;
      box-sizing: border-box;
      z-index: 99;
      .model-bg {
        display: flex;
        flex-wrap: wrap;
        >div{
          width: 33%;
          padding: 0 6px 12px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          >div{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            animation: toshow 2s;
            .imgs {
              width: 100%;
              height: 100%;
              background : -webkit-radial-gradient(50% 120%, circle cover, #000000cc, #000000b0, #000000ab);;
              background : -moz-radial-gradient(50% 120%, circle cover, #000000cc, #000000b0, #000000ab);;
              background : radial-gradient(50% 120%, circle cover, #000000cc, #000000b0, #000000ab);;
              &::before{
                content :  "" ;
                position :  absolute ;
                background: -webkit-radial-gradient( 50%  120% ,  circle  cover, rgba( 255 ,  255 ,  255 ,  0.5 ), rgba( 255 ,  255 ,  255 ,  0 )  70% );
                border-radius:  50% ;
                bottom :  2.5% ;
                left :  5% ;
                opacity:  0.6 ;
                height :  100% ;
                width :  90% ;
                -webkit-filter: blur( 5px );
                z-index :  2 ;
              }
              img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                border-radius: 50%;
                opacity: .3;
              }
            }
            >div:last-child {
              position: absolute;
              font-size: 14px;
              bottom: 0;
              width: 100%;
              height: 30px;
              line-height: 22px;
              text-align: center;
              // background-color: #00000069;
              color: #fff;
            }
          }
        }
      }
    }
    .start-main {
      overflow: hidden;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: radial-gradient(220% 105% at top center, #0f378c 10%, #5f63d6 40%, #6f73e9 65%, #578ceb);
      .stars{
        transform: perspective(500px);
        transform-style: preserve-3d;
        position: absolute;
        perspective-origin: 50% 100%;
        left:50%;
        animation: rotate 90s infinite linear;
        bottom: 0;
        .star{
          width: 3px;
          height: 3px;
          background: #f7f7b8;
          position: absolute;
          top: 0;
          left: 0;
          backface-visibility: hidden;
        }
      }
    }
  }
  @keyframes rotate {
    0%{
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
    }
    100%{
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
    }
  }
</style>