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
import {listMath} from './js'
import { Toast } from 'vant';

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
      emojis: ['😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'],
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
      page: 1, // 页码
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
    window.scrollTo(0, document.body.scrollHeight)
    this.getInit();
    // this.getCaht();
    // let that = this;
    // 随即获取回复
    // this.$socket.on('receiveMsg', function (data) {
    //   console.log('客户端接收服务器发送的消息===', data) 
    //   that.list.push({
    //     id: '001',
    //     name: '阁主',
    //     img: '1.jpg',
    //     content: `输入框失去焦点的数据socket：${data.content}`,
    //     time: '',
    //   });
    // })
    // this.socketOpen();
    // this.createWebSocket();
    // this.getWebscoket();
  },
  created() {
    this.initWebSocket(); // 链接ws
    this.getInitUser(); // 获得当前用户信息
    this.getChatMore(); // 获取聊天信息
  },
  methods:{
    // 点击加载更多
    async getChatMore() {
      let data={
        page: this.page
      }
      // let res = await aaa(data);
      // this.page++;
      let res=[
        {
          "fromUser":1,
          "fromUserNickname":"东东",
          "toUser":2,
          "toUserNickname":"666",
          "sendMessage":"😀😀qwe"
        },
        {
          "fromUser":2,
          "fromUserNickname":"666",
          "toUser":1,
          "toUserNickname":"东东",
          "sendMessage":"😀😀"
        },
        {
          "fromUser":2,
          "fromUserNickname":"666",
          "toUser":1,
          "toUserNickname":"东东",
          "sendMessage":"😀😀qwe"
        }
      ]
      this.getList(res)
    },
    // 初始用户
    getInitUser(){
      let userInfo = JSON.parse(localStorage.getItem('userid'));
      
      if(!userInfo){
        this.$router.push({path: '/login'})
      }

      this.users = userInfo || {};
      console.log('u===========',this.users)
      // 获取好友信息
      let list = [
        {
          account: "wangdongdong",
          id: 1,
          password: "4c7a0e30e2874f2534e8892a5ddde722",
          userName: "dd",
          userNick: "东东",
        },
        {
          account: "ymh",
          id: 2,
          password: "13710f6ab4560927385977dc93b0d95a",
          userName: "y",
          userNick: "666",
        }
      ]
      this.userList = list;
      this.friend = userInfo.id === 1 ? list[1] : list[0];
      console.log('this=====',this)
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
        this.list.unshift(item);
      })
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
      // this.setScroll();
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
        // let img = require(`../../assets/images/imgmodel/${data}`)
        let img =`http://180.76.106.221:5010/images/chat/${data}`
        return img;
      }
      // http://180.76.106.221:5010/images/chat/
    },

    socketOpen() { 
      this.$socket.open()// 开始连接 socket
    },
    socketSendmsg() { // 发送消息
      this.$socket.emit('ServerReceive', '这里是客户端==>向服务端发消息了。。。。')
    },
    lockResult() {
      console.log('链接状态', this.$socket.connected)
      console.log('this.$socket', this.$socket)
      console.log('this.sockets', this.sockets)
    },
    closeSocket() {
      this.$socket.close()
    },
    submsgContent(flag) {  
      if (flag) { //事件订阅
        this.sockets.subscribe('ClientReceive', data => { //组件内监听
          console.log('组件内监听-welcome', data)
        })
      } else {//取消订阅
        this.sockets.unsubscribe('ClientReceive')
      } 
    },

    initWebSocket(){ //初始化weosocket
      const wsuri = "ws://180.76.106.221:8887/";
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
      // {"fromUser":1,"fromUserNickname":"东东","toUser":2,"toUserNickname":"666","sendMessage":"😀😀"}
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

    // getWebscoket(){
    //   //当前浏览器是否支持websocket
    //   if ("WebSocket" in window) {
    //     console.log('-------')
    //     const ws = new WebSocket("ws://180.76.106.221:8887/");
    //     console.log('ws',ws)
    //     // 初次连接
    //     ws.onopen = () => {
    //       console.log("初次连接");
    //     };
    //     // 发送
    //     ws.onmessage = (res) => {
    //       console.log('send=',res.data);
    //     };
    //     ws.onerror = () => {
    //       console.log("异常");
    //     };
    //     // ws.onclose = () => {
    //     //   console.log("关闭链接");
    //     // };
    //     //当前浏览器页面关闭了 此时应该关闭链接
    //     // 生命周期
    //     // onUnmounted(() => {
    //     //   console.log("关闭");
    //     //   ws.close(); //关闭
    //     // });
    //   } else {
    //     console.log("不支持WebSocket");
    //   }

    // }

    // // 创建websocket连接
    // createWebSocket(){
    //     let that = this;
    //     that.webSocet = null;
    //     that.webSocet= new WebSocket('ws://180.76.106.221:8887');
    //     // console.log('that.webSocet',that.webSocet);
    //     if(that.webSocet.readyState == 0 && !that.timeoutnum){
    //         that.timer = setInterval(() => {
    //             if(that.timer_num < 3 && that.webSocet.readyState == 0 ){
    //                 that.timer_num++;
    //             }else{
    //                 clearInterval(that.timer);
    //                 that.timer = null;
    //                 that.timer_num = 0;
    //                 // 只要不成功就连接
    //                 if(that.webSocet.readyState != 1){
    //                     that.reconnect();
    //                 }
    //             }
    //         }, 1000);
    //     }
    //     //链接成功时
    //     that.webSocet.onopen = function(){
    //         //开启心跳
    //         that.start(); 
    //     }
    //     //收到消息时
    //     that.webSocet.onmessage = (msgInfo) => {
    //         console.log('接收到的消息',msgInfo);
    //         // that.UP_WEBSOCKETINFO({data:msgInfo.data,timer:msgInfo.timeStamp});
    //         //收到服务器信息，心跳重置
    //         that.reset();
    //     }
    //     //连接错误
    //     that.webSocet.onerror = function(){
    //         console.log("WebSocket连接发生错误");
    //         //重连
    //         that.reconnect();
    //     };
    //     // 监听组件的销毁
    //     that.$once('hook:beforeDestroy', () => {
    //           if(that.webSocet.close){
    //             that.webSocet.close();
    //             that.webSocet.onclose = () =>{ 
    //                 console.log('web socket 链接已关闭'); 
    //             };
    //         }
    //     })
    // },
    // reconnect() {//重新连接
    //     let that = this;
    //     if(that.webSocet && that.webSocet.readyState == 1){
    //         clearInterval(that.timeoutnum);
    //         that.timeoutnum = null;
    //         that.timeNum = 0;
    //         return;
    //     }
    //     if(!that.timeoutnum) {
    //         that.timeoutnum = setInterval(function () {
    //             if(that.webSocet && that.webSocet.readyState == 1){
    //                 clearInterval(that.timeoutnum);
    //                 that.timeoutnum = null;
    //                 that.timeNum = 0;
    //                 return;
    //             }   
    //             //新连接
    //             that.createWebSocket();
    //             that.timeNum++;
    //             if(that.timeNum >= 3){
    //                 clearInterval(that.timeoutnum);
    //                 that.timeoutnum = null;
    //                 that.timeNum = 0;
    //             }
    //         },1000);
    //     };
    // },
    // reset(){//重置心跳
    //     //清除时间
    //     clearTimeout(this.timeoutObj);
    //     clearTimeout(this.serverTimeoutObj);
    //     //重启心跳
    //     this.start();
    // },
    // start(){//开启心跳
    //     let that = this;
    //     that.timeoutObj && clearTimeout(that.timeoutObj);
    //     that.serverTimeoutObj && clearTimeout(that.serverTimeoutObj);
    //     that.timeoutObj = setTimeout(function(){
    //         //这里发送一个心跳，后端收到后，返回一个心跳消息，
    //         if (that.webSocet && that.webSocet.readyState == 1) {//如果连接正常
    //             that.webSocet.send({
    //                 name:'123'
    //             });
    //         }else{//否则重连
    //             that.reconnect();
    //         }
            
    //     }, that.timeout)
    // },
  },

  destroyed() {
    this.websock.close() //离开路由之后断开websocket连接
  },

  beforeDestroy() { //订阅事件记得要取消---否则多次订阅会引发多次消息返回
    // if (!this.$socket) return
    // this.sockets.unsubscribe('ClientReceive')
    // this.$socket.close()
  },
  sockets: { //监听用的是this.sockets   发送消息是this.$socket，不要弄混
      connecting() { console.log('正在连接') },
      connect() { console.log('连接成功') },
      disconnect() { console.log('断开连接') },
      connect_failed() { console.log('连接失败') },
      error() { console.log('错误发生，并且无法被其他事件类型所处理') },
      reconnecting() { console.log('正在重连') },
      reconnect_failed() { console.log('重连失败') },
      reconnect() { console.log('重连成功') },
      ClientReceive: data => {//全局监听订阅事件，需要与后端约定好
        console.log('welcome data', data)
      }
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
  @keyframes bg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>>
