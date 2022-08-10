<template>
  <div class="chat-main">
    <!-- 聊天列表 -->
    <div class="chat-list" v-for="(item,index) in list" :key="index">
      <div class="chat-img">
        <img class="left" v-if="item.id!==id && item.time===''" src="../../assets/images/imgmodel/1.jpg" alt="">
      </div>
      <div class="chat-content-main">
        <div v-if="item.name" class="chat-name" :class="{'is-right':item.id===id}">{{item.name}}</div>
        <div v-if="item.content" class="chat-content-model" :class="{'is-right':item.id===id}">
          <div class="chat-content">{{item.content}}</div>
        </div>
        <div class="chat-time" v-if="item.time">{{item.time}}</div>
      </div>
      <div class="chat-img">
        <img class="right" v-if="item.id===id" src="../../assets/images/imgmodel/1.jpg" alt="">
      </div>
    </div>
    <!-- 底部输入 -->
    <div>
      
    </div>
  </div>
</template>

<script>

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
    }
  }
}
</script>

<style lang="less" scoped>
  .chat-main{
    padding: 0 0 50px 0;
    box-sizing: border-box;
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
            justify-content: end;
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
  }
</style>>
