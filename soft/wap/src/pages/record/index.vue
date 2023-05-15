<template>
  <div class="record-main">
    <div class="record-list">
      <div class="record-model">
        <div class="top">
          <img src="../../assets/images/index/logo.png" art="头像"/>
          <h2>{{userInfo.account}}</h2>
        </div>
        <p>
          帝高阳之苗裔兮，朕皇考曰伯庸。

          摄提贞于孟陬兮，惟庚寅吾以降。

          皇览揆余初度兮，肇锡余以嘉名。

          名余曰正则兮，字余曰灵均。

          纷吾既有此内美兮，又重之以修能。

          扈江离与辟芷兮，纫秋兰以为佩。

          汩余若将不及兮，恐年岁之不吾与。

          朝搴阰之木兰兮，夕揽洲之宿莽。

          日月忽其不淹兮，春与秋其代序。

          惟草木之零落兮，恐美人之迟暮。

          不抚壮而弃秽兮，何不改乎此度？

          乘骐骥以驰骋兮，来吾道夫先路！
        </p>
        <div class="bottom">
          <img src="../../assets/images/article/1.jpg" art="头像"/>
          <img src="../../assets/images/article/1.jpg" art="头像"/>
          <img src="../../assets/images/article/1.jpg" art="头像"/>
        </div>
        <div class="tab">
          <div>阅读:12</div>
          <div>评论:12</div>
          <div>点赞:12</div>
        </div>
      </div>
      <div class="record-model">
        <div class="top">
          <img src="../../assets/images/index/logo.png" art="头像"/>
          <h2>{{userInfo.account}}</h2>
        </div>
        <p>
          路漫漫其修远兮，吾将上下而求索！
        </p>
        <div class="bottom">
          <img src="../../assets/images/article/1.jpg" art="头像"/>
        </div>
        <div class="tab">
          <div>阅读:12</div>
          <div>评论:12</div>
          <div>点赞:12</div>
        </div>
      </div>
      <div class="record-model">
        <div class="top">
          <img src="../../assets/images/index/logo.png" art="头像"/>
          <h2>{{userInfo.account}}</h2>
        </div>
        <p>
          路漫漫其修远兮，吾将上下而求索！
        </p>
        <div class="bottom">
          <img src="../../assets/images/article/1.jpg" art="头像"/>
          <img src="../../assets/images/article/1.jpg" art="头像"/>
          <img src="../../assets/images/article/1.jpg" art="头像"/>
          <img src="../../assets/images/article/1.jpg" art="头像"/>
          <img src="../../assets/images/article/1.jpg" art="头像"/>
          <img src="../../assets/images/article/1.jpg" art="头像"/>
          <img src="../../assets/images/article/1.jpg" art="头像"/>
          <img src="../../assets/images/article/1.jpg" art="头像"/>
          <img src="../../assets/images/article/1.jpg" art="头像"/>
        </div>
        <div class="tab">
          <div>阅读:12</div>
          <div>评论:12</div>
          <div>点赞:12</div>
        </div>
      </div>
    </div>
    <div class="h"></div>
  </div>
</template>

<script>
export default {
  name:'record',
  data() {
    return {
      userInfo:{},
    }
  },
  created() {
    this.getUserInfo();
  },
  methods:{
    // 获取用户信息
    getUserInfo(){
      let user = localStorage.getItem('userid') || "{}";
      this.userInfo = JSON.parse(user)
    },
  }
}
</script>

<style lang="less" scoped>
  .record-main{
    height: 100vh;
    background: linear-gradient(to bottom, #d1def9, #fafafa);
    .record-list{
      cursor: pointer;
      padding: 12px;
      box-sizing: border-box;
      font-size: 16px;
      .record-model{
        background: #fff;
        box-shadow: 1px 1px 2px 1px #ebebeb;
        border-radius: 4px;
        padding: 12px;
        box-sizing: border-box;
        &:not(:last-child){
          margin-bottom: 12px;
        }
        .top{
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          img{
            border-radius: 50%;
            width: 35px;
            height: 35px;
            object-fit: cover;
            box-shadow: 0px 0px 0px 1px #f0f2fe;
          }
          h2{
            margin-left: 12px;
            flex: 1;
            white-space: nowrap;
            overflow: hidden;//文本超出隐藏
            text-overflow: ellipsis;//文本超出省略号替代
            height: 30px;
            line-height: 30px;
          }
        }
        p{
          margin-bottom: 12px;
          display: -webkit-box;//将盒子转换为弹性盒子
          -webkit-box-orient: vertical;//文本显示方式，默认水平
          -webkit-line-clamp: 3;//设置显示多少行
          overflow: hidden;
          line-height: 24px;
          text-indent: 10px;
        }
        .bottom{
          display:flex;
          flex-wrap: wrap;
          align-items:center;
          border-radius: 4px;
          overflow: hidden;
          img{
            width: 109px;
            height: 109px;
            object-fit: cover;
          }
        }
        .tab{
          margin-top: 12px;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          cursor: pointer;
          div{
            width:33%;
            white-space: nowrap;
            overflow: hidden;//文本超出隐藏
            text-overflow: ellipsis;//文本超出省略号替代
            text-align: center;
          }
        }
      }
    }
    .h{
      height: 56px;
      width: 100%;
    }
  }
</style>
