<template>
  <div class="chat-main">
    <!-- 头部 -->
    <div class="chat-head">
      <div class="left" @click="$router.back()"><van-icon class="arrow-left" name="arrow-left" /></div>
      <h1>客服</h1>
      <div class="right"></div>
    </div>
    <!-- 聊天 -->
    <div class="chat-top" :class="{show:active}">
      <!-- 聊天列表 -->
      <div class="chat-list" v-for="(item,index) in list" :key="index">
        <div class="chat-img">
          <img class="left" v-if="item.id!==id && item.time===''" :src="getImg(item.img)" alt="">
        </div>
        <div class="chat-content-main">
          <div v-if="item.content" class="chat-name" :class="{'is-right':item.id===id}">{{item.name}}</div>
          <div v-if="item.content" class="chat-content-model" :class="{'is-right': item.id===id}">
            <div class="chat-content" :class="{'active': item.id!==id}">{{item.content}}</div>
          </div>
          <div class="chat-time" v-if="!item.content">{{item.time}}</div>
        </div>
        <div class="chat-img">
          <img class="right" v-if="item.id===id" :src="getImg(item.img)" alt="">
        </div>
      </div>
    </div>
    <!-- 底部输入 -->
    <div class="chat-foot">
      <div class="chat-foot-top">
        <div class="chat-emo" @click="getEmoView">😀</div>
        <input class="chat-input" v-model="context" id="context" @focus="getFocus"/>
        <div class="chat-send">
          <div>
            <label v-show="!active" @click="toSend" for="context">发送</label>
            <label v-show="active" @click="toSend">发送</label>
          </div>
        </div>
      </div>
      <div class="chat-bot" :class="{show:active}">
        <div class="chat-model">
          <div class="swiper mySwiper1"  >
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in emoList" :key="index">
                <div class="chat-row">
                  <div 
                    v-for="(item,index) in item"
                    :key="index"
                    @click="getEmo"
                  >{{item}}</div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// chat_id: "62f626f37e756a06a87172bc_62f6271e7e756a06a87172bd"
// content: "😁"
// create_time: 1660299295868
// from: "62f6271e7e756a06a87172bd"
// read: false
// to: "62f626f37e756a06a87172bc"
// __v: 0
// _id: "62f6281f3867230b907b4564"
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";

export default {
  data() {
    return {
      id: '001',
      list: [
        {
          id: '001',
          name: 'tom',
          img: '1.jpg',
          content: '😀哈哈哈哈',
          time:'',
        },
        {
          id: '002',
          name: 'jack',
          img: '2.jpg',
          content: '😁heiheiehi😁heiheiehi😁heiheiehi😁heiheiehi😁heiheiehi😁heiheiehi',
          time: '',
        },
        {
          id: '',
          name: '',
          img: '',
          content: '',
          time: '22:23',
        },
        {
          id: '002',
          name: 'jack',
          img: '2.jpg',
          content: '😀哈哈哈哈',
          time:'',
        },
        {
          id: '001',
          name: 'tom',
          img: '1.jpg',
          content: '😁heiheiehi😁heiheiehi😁heiheiehi😁heiheiehi😁heiheiehi😁heiheiehi',
          time: '',
        },
      ],
      emojis: ['😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'],
      context: '',
      active: false,
      emoList: [],
    }
  },
  mounted() {
    window.scrollTo(0, document.body.scrollHeight)
    this.getInit();
  },
  methods:{
    getInit(){
      // 拼接二维数组
      let list = []
      this.emojis.forEach((item, index) => {
        list.push(item);
        if(list.length === 20){
          this.emoList.push(list);
          list = [];
        }
        // 非整除
        let a = this.emojis/20 !== Math.ceil(this.emojis/20);
        // 最后一组
        let b = Math.ceil(this.emojis.length/20) === this.emoList.length+1;
        // 最后一个
        let c = this.emojis.length-1 === index;
        if( a && b && c) {
          this.emoList.push(list);
        }
      });
      let swiper = new Swiper(".mySwiper1", {
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },

    toSend() {
      this.context.trim();
      if(!this.context.trim()){
        return;
      }
      let obj = {
        id: '001',
        name: 'tom',
        img: '1.jpg',
        content: this.context,
        time: '',
      };
      let obj1 = {
        id: '002',
        name: 'jack',
        img: '2.jpg',
        content: this.context,
        time: '',
      };
      this.list.push(obj);
      this.list.push(obj1);
      this.context = '';
      this.setScroll();
    },

    getFocus() {
      this.active = false;
      this.setScroll();
    },

    setScroll() {
      this.$nextTick(()=>{
        window.scrollTo(0, document.body.scrollHeight)
      })
    },

    getEmo() {
      this.context = this.context + '😀';
    },

    getEmoView() {
      this.active = !this.active;
      this.setScroll();
    },

    getImg(data) {
      if (data) {
        let img = require(`../../assets/images/imgmodel/${data}`)
        return img;
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .chat-main{
    .chat-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 49px;
      line-height: 49px;
      border-bottom: 1px solid #eee;
      box-sizing: content-box;
      background: #fff;
      position: fixed;
      top: 0;
      padding: 0 12px 0 4px;
      box-sizing: border-box;
      .left{
        .arrow-left{
          margin-top: 17px;
        }
        cursor: pointer;
      }
      h1 {
        font-size: 18px;
      }
      .right{
      }
    }
    .chat-top{
      padding: 50px 0 50px 0;
      box-sizing: border-box;
      &.show{
        padding: 50px 0 250px 0;
        box-sizing: border-box;
      }
    }
    .chat-list{
      display: flex;
      padding: 12px 0;
      box-sizing: border-box;
      .chat-img{
        width: 50px;
        min-width: 50px;
        height: 50px;
        img {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 4px;
          &.left{
            float: right;
          }
          &.right{
            float: left;
          }
          &:after {
            clear: both;
            content: "";
            display: block;
          }
        }
      }
      .chat-content-main{
        flex:1;
        padding: 0 6px;
        box-sizing: border-box;
        .chat-name{
          font-size: 12px;
          padding: 4px 0;
          box-sizing: border-box;
          &.is-right{
            text-align: right;
          }
        }
        .chat-content-model{
          display: flex;
          &.is-right{
            justify-content: flex-end;
          }
          .chat-content{
            font-size: 16px;
            background: #628bff;
            padding: 12px;
            border-radius: 4px;
            word-break: break-word;
            box-shadow: 1px 1px 2px 1px #f4f4f4;
            &.active{
              background: #fff;
            }
          }
        }
        .chat-time{
          text-align: center;
          font-size: 16px;
          line-height: 50px;
          color: #505050;
        }
      }
    }
    .chat-foot{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #fafafa;
      z-index: 1;
      .chat-foot-top{
        width: 100%;
        height: 50px;
        display: flex;
        background: #fff;
        .chat-emo{
          min-width:50px;
          width: 50px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          cursor: pointer;
        }
        .chat-input{
          flex: 1;
          height: 34px;
          font-size: 16px;
          padding: 0 12px 0;
          box-sizing: border-box;
          margin-top: 8px;
          background: #f9f9f9;
          border-radius: 4px;
        }
        .chat-send{
          min-width:70px;
          width: 70px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          font-size: 15px;
          >div{
            background: #628bff;
            width: 50px;
            height: 30px;
            line-height: 30px;
            border-radius: 4px;
            margin-top: 10px;
            margin-left: 10px;
            color: #fff;
            cursor: pointer;
          }
        }
      }
      .chat-bot{
        height:200px;
        background: #fafafa;
        display: none;
        padding: 10px 12px 0 12px;
        box-sizing: border-box;
        &.show{
          display: block;
        }
        .chat-model{
          .chat-row{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            >div{
              width: 20%;
              height: 40px;
              line-height: 40px;
              text-align: center;
              cursor: pointer;
            }
          }
          .swiper{
            height: 188px;
          }
        }
      }
    }
  }
</style>>
