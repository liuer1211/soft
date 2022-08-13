<template>
  <div class="chat-main">
    <div class="chat-top" :class="{show:active}">
      <!-- 聊天列表 -->
      <div class="chat-list" v-for="(item,index) in list" :key="index">
        <div class="chat-img">
          <img class="left" v-if="item.id!==id && item.time===''" src="../../assets/images/imgmodel/1.jpg" alt="">
        </div>
        <div class="chat-content-main">
          <div v-if="item.content" class="chat-name" :class="{'is-right':item.id===id}">{{item.name}}</div>
          <div v-if="item.content" class="chat-content-model" :class="{'is-right':item.id===id}">
            <div class="chat-content">{{item.content}}</div>
          </div>
          <div class="chat-time" v-if="!item.content">{{item.time}}</div>
        </div>
        <div class="chat-img">
          <img class="right" v-if="item.id===id" src="../../assets/images/imgmodel/1.jpg" alt="">
        </div>
      </div>
    </div>
    <!-- 底部输入 -->
    <div class="chat-foot">
      <div class="chat-top">
        <div class="chat-emo" @click="getEmoView">😀</div>
        <input class="chat-input" v-model="context" @focus="active = false"/>
        <div class="chat-send">
          <div @click="toSend">发送</div>
        </div>
      </div>
      <div class="chat-bot" :class="{show:active}">
        <div class="chat-model">
          <div class="chat-row">
            <div 
              v-for="(item,index) in 20" 
              :key="index"
              @click="getEmo"
            >😀</div>
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
export default {
  data() {
    return {
      id: '001',
      list: [
        {
          id: '001',
          name: 'tom',
          img: '',
          content: '😀哈哈哈哈',
          time:'',
        },
        {
          id: '002',
          name: 'jack',
          img: '',
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
          img: '',
          content: '😀哈哈哈哈',
          time:'',
        },
        {
          id: '001',
          name: 'tom',
          img: '',
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
    }
  },
  methods:{
    toSend() {
      this.context.trim();
      if(!this.context.trim()){
        return;
      }
      let obj = {
        id: '001',
        name: 'tom',
        img: '',
        content: this.context,
        time: '',
      };
      let obj1 = {
        id: '002',
        name: 'tom',
        img: '',
        content: this.context,
        time: '',
      };
      this.list.push(obj);
      this.list.push(obj1);
      this.context = '';
      this.setScroll();
      // document.documentElement.scrollTop // 滚动条高
      // document.body.clientHeight // 窗口高
      // document.documentElement.scrollHeight
      // document.documentElement.scrollTop = document.documentElement.scrollHeight - document.body.clientHeight
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
    }
  }
}
</script>

<style lang="less" scoped>
  .chat-main{
    .chat-top{
      padding: 0 0 50px 0;
      box-sizing: border-box;
      &.show{
        padding: 0 0 250px 0;
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
          }
        }
        .chat-time{
          text-align: center;
          font-size: 16px;
          line-height: 50px;
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
      .chat-top{
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
              height: 50px;
              line-height: 50px;
              text-align: center;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>>
