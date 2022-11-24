<template>
  <div class="chat-main">
    <!-- 头部 -->
    <div class="chat-head">
      <!-- <div class="left" @click="$router.back()"><van-icon class="arrow-left" name="arrow-left" /></div> -->
      <div></div>
      <h1>{{friend.userNick}}</h1>
      <div class="right"></div>
    </div>
    <!-- 聊天 -->
    <div class="chat-top" :class="{show:active}">
      <div class="chat-more" @click="getChatMore">
        -------{{chatMore ? '点击加载更多' : '没有更多数据了'}}-------
      </div>
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
        <!--  -->
        <input class="chat-input" v-model="context" id="context" @focus="getFocus"/>
        <div class="chat-send">
          <div>
            <label v-show="!active" @click="toSendMsg" for="context">发送</label>
            <label v-show="active" @click="toSendMsg">发送</label>
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
                    @click="getEmo(item)"
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

import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";
import {listMath} from './js'
import { Toast } from 'vant';
import { getPageMessageList } from '@/axios/index' 

export default {
  data() {
    return {
      // id: '1',
      // name: '游客',
      startText: {
        id: '2',
        name: '阁主',
        img: '1.jpg',
        content: '欢迎来到解忧阁，请输入您想说的话，我们将给出您想要的答案！',
        time:'',
      },
      // {
      //   "fromUser":"1",
      //   "fromUserNickname":"昵称1",
      //   "toUser":"2",
      //   "toUserNickname":"昵称2",
      //   "sendMessage":"发送消息内容"
      // }
      list: [
        // {
        //   id: '002',
        //   name: '游客',
        //   img: '2.jpg',
        //   content: '😁heiheiehi😁heiheiehi😁heiheiehi😁heiheiehi😁heiheiehi😁heiheiehi',
        //   time: '',
        // },
      ],
      emojis: ['😀','😃','😅','🤣','😂','🙂','🙃','😉','😊',
      '😇','😕','😟','🙁','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱',
      '😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','💩','🤡','👹','👺',
      '👻','👽','👾','🤖','😺','😸','😹','😻','😼',
      '💘','💝','💖','💗','💋','💯','🖤','💢',
      '💥','💦','🤩','😍','🥰','😜','🤪','😝','😋','😙','😚','🤭','🤗','😗','😘',
      '🤑','😬','🤢','🤮','🤧',
      '👋','🤚','🖐','✋','🖖','👩‍🍳','👨‍✈️','👩‍✈️',
      '🧜‍♂️','🧜','🧍','🚶‍♀️','🧍‍♀️','🧎','🧎‍♂️','⛹️‍♀️','🏋','🚵‍♀️','🚵‍♂️',
      '🤏','✌','🤞','🤟','🤙','👣','👌','👈','👉','👂',
      '🦶','👃','🦵','🧏‍♂️','🧏‍♀️','🙇','🙇‍♂️','🙇‍♀️','🤦','🤦‍♂️','🤦‍♀️','🤷',
      '🐵','🦧','🐶','🐕','🐂','🐃','🦌','🐏','🦓','🦄','🐽','🐗','🐎','🐰','🦦','🦥','🐍',
      '🐲','🦈','🐡','🐝','🍄','🌲','🍁','🍀','🍉','🍊','🍋','🍌','🍍','🥭',
      '🍎','🥒','🥬','🥦','🥓','🍔','🍟',
      '🎃','🎄','🎆','🎇','🧨','✨','🎈','🎁','🎗','🎀','🧧','🔫','🪁','🪀','👓','👗',
      '🧦','👜','👝','📪','🧪','🦯','🩺','☎','📱','⌨','✔','❌','🏁','🚩',
      '⛔','🚳','🚭','☢','☣','↩','↪','⬆',
      ],
      context: '',
      active: false,
      emoList: [],
      websock: null,
      users:{
        // account: "wangdongdong"
        // id: 1
        // password: "4c7a0e30e2874f2534e8892a5ddde722"
        // userName: "dd"
        // userNick: "东东"
      }, // 当前用户
      friend:{
        // account: "wangdongdong"
        // id: 2
        // password: "4c7a0e30e2874f2534e8892a5ddde722"
        // userName: "dd"
        // userNick: "东东"
      }, // 好友信息
      chatText:{}, // 聊天数据
      userList:[], // 用户数据
      pageNumber: 0, // 页码
      chatMore: true, // 加载更多
    }
  },
  computed:{
    name() {
      return this.users.userNick || ''
    },
    id(){
      return this.users.id || ''
    }
  },
  mounted() {
    this.getInit();
  },
  created() {
    this.initWebSocket(); // 链接ws
    this.getInitUser(); // 获得当前用户信息
    this.getChatMore(); // 获取聊天信息
  },
  methods:{
    // 点击加载更多
    async getChatMore() {
      if(!this.chatMore) {
        return;
      }
      let data={
        pageNumber: this.pageNumber
      }
      try{
        let res = await getPageMessageList(data);
        this.pageNumber++;
        console.log('====res==',res)
        if(res.result.content.length){
          this.getList(res.result.content)
          this.chatMore = true
        } else {
          this.chatMore = false
        }
      } catch(e){
        console.log(e)
      }
    },
    // 初始用户
    getInitUser(){
      try {
        let userInfo = JSON.parse(localStorage.getItem('userid'));
        let friend = JSON.parse(localStorage.getItem('friend'));

        if(!userInfo){
          this.$router.push({path: '/login'})
        }

        this.users = userInfo || {};
        console.log('u===========',this.users)
        // 获取好友信息
        let list = [
          {
            ...userInfo
          },
          {
            ...friend
          }
        ]

        // {
        //   account: "wangdongdong",
        //   id: 1,
        //   password: "4c7a0e30e2874f2534e8892a5ddde722",
        //   userName: "dd",
        //   userNick: "东东",
        // },
        // {
        //   account: "ymh",
        //   id: 2,
        //   password: "13710f6ab4560927385977dc93b0d95a",
        //   userName: "y",
        //   userNick: "666",
        // }
        console.log('list====',list)
        this.userList = list;
        this.friend = userInfo.id === 1 ? list[1] : list[0];
        console.log('this=====',this)
      } catch(e) {
        console.log(e)
      }
    },
    // 获取聊天信息
    getList(res){
      // console.log('res=',res)
      let list = res
      list = list.map(item=>{
        return {
          ...item,
          id: item.fromUser ,
          name: item.fromUserNickname,
          img: item.fromUser === 1 ? '2.jpg' : '1.jpg',
          content: item.sendMessage,
          time: '',
        }
      })
      list.forEach(item => {
        this.list.push(item);
      })
      console.log(this.pageNumber)
      if(this.pageNumber <= 1){
        this.setScroll();
      }
    },
    // 拼接第一句话
    getCaht() {
      setTimeout(()=>{
        this.list.push(this.startText);
      },500)
    },
    // 表情
    getInit(){
      // 拼接二维数组
      let list = []
      this.emojis.forEach((item, index) => {
        list.push(item);
        if(list.length === 28){
          this.emoList.push(list);
          list = [];
        }
        // 非整除
        let a = this.emojis.length/28 !== Math.ceil(this.emojis.length/28);
        // 最后一组
        let b = Math.ceil(this.emojis.length/28) === this.emoList.length+1;
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
    // 发送
    toSend() {
      this.context.trim();
      if(!this.context.trim()){
        return;
      }
      let obj = {
        id: this.id,
        name: this.name,
        img: '2.jpg',
        content: this.context,
        time: '',
      };
      // 随即获取回复
      let obj1 = {
        id: '2',
        name: '阁主',
        img: '1.jpg',
        content: this.getContext(),
        time: '',
      };
      this.list.push(obj);
      // 延时回复
      setTimeout(()=>{
        this.list.push(obj1);
        this.setScroll();
      },500)
      this.context = '';
      this.setScroll();
      // this.toSendMsg();
    },
    // 发送消息
    toSendMsg() {
      console.log('con===',this.context.trim())
      if(!this.context.trim()){
        return;
      }
      
      // {
      //   "fromUser":"1",
      //   "fromUserNickname":"昵称1",
      //   "toUser":"2",
      //   "toUserNickname":"昵称2",
      //   "sendMessage":"发送消息内容"
      // }
      this.websocketsend(JSON.stringify({
        // from:'1', to:'2', content:this.context.trim()
        fromUser:this.id,
        fromUserNickname:this.name,
        toUser: this.id === 1 ? this.userList[1].id : this.userList[0].id,
        toUserNickname: this.id === 1 ? this.userList[1].userNick : this.userList[0].userNick,
        sendMessage: this.context.trim()
      }));
      this.context=''
      // this.$socket.emit('sendMsg', {from:'001', to:'002', content:this.context.trim()})
    },
    // 随即获取回复
    getContext() {
      try {
        let index = Math.ceil(Math.random()*10);
        // console.log(index);
        let context = listMath(index);
        return context;
      } catch(e) {
        console.log(e);
        return '';
      }
    },
    // 输入框聚焦
    getFocus() {
      this.active = false;
    },
    // 设置滚动条
    setScroll() {
      this.$nextTick(()=>{
        window.scrollTo(0, document.body.scrollHeight)
      })
    },
    // 拼接文字和表情
    getEmo(item) {
      this.context = this.context + item;
    },
    // 显示隐藏表情
    getEmoView() {
      this.active = !this.active;
      this.setScroll();
    },
    // 头像图片地址
    getImg(data) {
      if (data) {
        // let img = require(`../../assets/images/chat/${data}`);
        let img = `http://116.204.116.99:8891/img/${data}`
        return img;
      }
    },


    initWebSocket(){ //初始化weosocket
      const wsuri = "ws://116.204.116.99:8887/";
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen(){ //连接建立之后执行send方法发送数据
      console.log('链接成功')
      // let actions = {"test":"12345"};
      // this.websocketsend(JSON.stringify(actions));
    },
    websocketonerror(){//连接建立失败重连
      console.log('重连')
      Toast.fail('重连');
      this.initWebSocket();
    },
    websocketonmessage(e){ //数据接收
      try {
        console.log('数据接收==',e.data);
        console.log('数据接收==',typeof e.data);
        console.log('fromUser==', e.data.fromUser);
      
        const redata = JSON.parse(e.data);
        console.log('数据接收---',redata.fromUser);

        if (redata.fromUser){
          this.getChatInfo(redata);
        }
      } catch(e) {
        console.log(e)
      }
    },
    websocketsend(Data){//数据发送
      console.log('数据发送',Data)
      this.websock.send(Data);
    },
    websocketclose(e){  //关闭
      console.log('断开连接',e);
    },

    // 拼数据
    getChatInfo(data) {
      console.log('123===',data)
      console.log('123===',data.sendMessage)
      let obj = {
        id: data.fromUser ,
        name: data.fromUserNickname,
        img: data.fromUser === 1 ? '2.jpg' : '1.jpg',
        content: data.sendMessage,
        time: '',
      };
     
      this.list.push(obj);
      
      this.setScroll();
    },

  },

  destroyed() {
    this.websock.close() //离开路由之后断开websocket连接
  },

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
      z-index: 9;
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
      .chat-more{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        font-size: 14px;
        cursor: pointer;
        color: #9f9f9f;
      }
    }
    .chat-list{
      display: flex;
      padding: 12px 0;
      box-sizing: border-box;
      animation: bg .5s;
      .chat-img{
        width: 50px;
        min-width: 50px;
        height: 50px;
        img {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0px 0px 2px 0px #cdcdcd;
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
            line-height: 22px;
            letter-spacing: 1px;
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
              width: 14%;
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
  @keyframes bg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>>
