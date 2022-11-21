<template>
  <div class="sect-main">
    <!-- 上 -->
    <div class="swiper mySwiper1"  >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <!-- <img :src="getImg(item.imgs)" /> -->
          <div>
            <div>{{item.name}}</div>
            <div>{{item.descr}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 下 -->
    <div class="swiper mySwiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="'i'+index">
          <!-- <img :src="getImg(item.imgs)" /> -->
          <div class="bot-model">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";
import { reqQueryNovalAttributeList } from '@/axios/index' 
export default {
  data() {
    return {
      list: [
        // {
        //   imgs: 'y.jpg',
        //   name: '燕云山庄',
        //   descr: '四面环山，云雾缭绕，日出映月'
        // },
        // {
        //   imgs: '1.jpg',
        //   name: '魔教',
        //   descr: '断崖之上，云天之巅'
        // },
        // {
        //   imgs: '2.jpg',
        //   name: '别离门',
        //   descr: '幽谷寒舍，鸟语花香'
        // },
        // {
        //   imgs: '3.jpg',
        //   name: '正威镖局',
        //   descr: '太湖之畔，国色天香'
        // },
        // {
        //   imgs: '3.jpg',
        //   name: '少林寺',
        //   descr: '嵩山有寺，北斗之望'
        // },
        // {
        //   imgs: '3.jpg',
        //   name: '名剑山庄',
        //   descr: '天下一剑，亦正亦邪'
        // },
      ]
    };
  },
  created() {
    // 初始数据
    this.getListDetail();
  },
  watch: {
    list:{
      handler(newval,oldval) {
        this.$nextTick(()=>{
          this.getInitDate();
        })
      },
      deep: true,
    }
  },
  methods: {
    // 初始数据
    async getListDetail() {
      try{
        // 首页进入
        if (this.$route.params.id) {
          // 查询
          let res3 = await reqQueryNovalAttributeList({
            novalId: this.$route.params.id.toString(),
            attribute: this.$route.params.data.code
          });
          if (res3.responseCode && res3.responseCode === '0000') {
            this.list = res3.result
            this.$store.dispatch('getNovelSectList',this.list)
          }
          // console.log(this.list)
        } else {
          // 详细页返回
          if (this.$store.state.novel.novelSectList && this.$store.state.novel.novelSectList.length) {
            this.list = this.$store.state.novel.novelSectList
          } else {
            this.$router.go(-1);
          }
        }
      } catch(e) {
        this.list = [{
          "id": 1,
          "name": "燕云山庄",
          "instro": "",
          "descr": "四面环山，云雾缭绕，日出映月",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "kungFu": "",
          "sect": ""
        },{
          "id": 8,
          "name": "魔教",
          "instro": "",
          "descr": "断崖之上，云天之巅",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "kungFu": "",
          "sect": ""
        }]
        this.$store.dispatch('getNovelSectList',this.list)
      }
      
    },
    // 初始数据
    getInitDate() {
      this.$nextTick(() => {
        let swiper = new Swiper(".mySwiper2", {
          // loop: true,
          spaceBetween: 10,
          slidesPerView: 4, // 同时显示的数量
          freeMode: true, // 每次滑动不止一个
          watchSlidesProgress: true, // 进度
        });
        let swiper2 = new Swiper(".mySwiper1", {
          // loop: true,
          // spaceBetween: 10,
          thumbs: {
            swiper: swiper,
          },
        });
      });
    },
    // 动态拼接图片地址
    getImg(data) {
      if (data) {
        let img = require(`../../../assets/images/people/${data}`)
        return img;
      }
    }
  },
};
</script>

<style lang="less" scoped>
  .sect-main {
    animation: toshow 2s;
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(to top, #176fe5, #ffffff);
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background: linear-gradient(0deg, #438aea, #7699fb);
  }
  .swiper-slide img {
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-slide .bot-model {
    position: absolute;
    font-size: 14px;
    color: #fad20d;
    writing-mode: vertical-rl;
    opacity: .3;
  }
  .swiper-slide.swiper-slide-thumb-active .bot-model{
    opacity: 1;
  }
  .mySwiper1 {
    height: 80%;
    width: 100%;
    .swiper-slide {
      position: relative;
      img {
        opacity: .9;
        display: none;
      }
      &.swiper-slide-active {
        >div {
          transform: scale(1);
          right: 16px;
        }
      }
      >div {
        position:absolute;
        top: 16px;
        right: 56px;
        bottom: 16px;
        box-sizing: border-box;
        writing-mode: vertical-rl;
        transition: .5s;
        transform: scale(.8);
        >div {
          font-size: 18px;
          &:last-child {
            margin-right: 12px;
            color: #fff;
            padding: 12px 0 0 16px;
            box-sizing: border-box;
            letter-spacing: 1px;
            text-align: left;
            line-height: 20px;
            text-shadow: 1px 1px 4px #2c2c2c;
          }
          &:first-child {
            font-weight: 600;
            font-size: 20px;
            color: #ffffff;
            letter-spacing: 6px;
            text-align: left;
            text-shadow: 1px 1px 4px #7c7c7c;
          }
        }
      }
    }
  }
  .mySwiper2 {
    height: 20%;
    box-sizing: border-box;
    padding: 10px;
    .swiper-wrapper {
      .swiper-slide {
        border-radius: 4px;
        overflow: hidden;
      }
    }
  }
  .mySwiper2 .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .mySwiper2 .swiper-slide-thumb-active {
    opacity: 1;
  }
</style>