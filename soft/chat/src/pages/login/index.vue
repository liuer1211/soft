<template>
  <div class="login-main">
    <div class="login-top">
      <van-icon name="contact" />
    </div>
    <div class="login-model">
      <van-field v-model="account" placeholder="请输入用户名"/>
      <van-field v-model="password" placeholder="请输入密码" type="password"/>
    </div>
    <div class="login-but">
      <van-button type="info" @click="toLogin()">登陆</van-button>
    </div>
  </div>
</template>

<script>
  import { userInfoLogin } from '@/axios/index' 
  import { Toast } from 'vant';
  export default {
    data () {
      return {
        account:'tingbao',
        password:'tingbao123456'
      }
    },
    methods: {
      // 登陆
      async toLogin() {
        if (this.account==='') {
          this.getTip('用户名不能为空!')
          return
        }
        if (this.password==='') {
          this.getTip('密码不能为空!')
          return
        }

        let params = {
          account:this.account,
          password:this.password,
        };
        let data = await userInfoLogin(params);
        console.log('data=',data)
        if (data.responseCode && data.responseCode === '0000') {
          localStorage.setItem('userid',JSON.stringify(data.result));
          this.$router.push({path: '/chat'})
        } else {
          this.getTip('登陆失败')
        }
      },
      // 消息提示
      getTip(data){
        Toast.fail(data);
      }
    },
    mounted(){
    },
    beforeDestroy(){
    },
    // beforeRouteEnter(to,from,next){
    //   console.log('beforeRouteEnter');
    //   if(localStorage.getItem('userid') && localStorage.getItem('userid')==='userid'){
    //     next('/home')
    //   }else{
    //     next()
    //   }
    // },
  }
</script>

<style scoped lang="less">
  .login-main{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #3c3a3a;
    overflow: hidden;
    .login-top{
      padding: 2rem 0.8rem 1rem 0.8rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      .login-img{
        width: 5rem;
        height: 5rem;
        display: block;
        object-fit: cover;
      }
      /deep/ .el-icon-user{
        font-size: 5rem;
        color: #e6e6e6;
      }
    }
    .login-model{
      margin: 0 0.8rem 0;
      /deep/ .el-input{
        margin: 0 0 1rem 0;
      }
      /deep/ .el-input__inner{
        background-color: #4c4a4a;
        border: 1px solid #777777;
        color: #bfbfbf;
      }
    }
    .login-but{
      margin: 0 0.8rem 1rem;
      /deep/ .el-button{
        background: #e6e6e6;
        width: 100%;
      }
    }
    /deep/ .van-icon{
      font-size: 2rem;
      color: #fff;
    }
    /deep/ .van-button{
      width:100%;
      margin-top: 0.5rem;
    }
    /deep/ .van-cell{
      &:nth-child(1){
        margin-bottom: 0.5rem;
      }
    }
  }
</style>
