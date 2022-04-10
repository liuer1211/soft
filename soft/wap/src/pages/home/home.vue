<template>
  <div class="home-main">
    <Search :searchVal='searchVal' :isShow="isShow"></Search>
    <div class="home-center">
      <ImgModel></ImgModel>
    </div>
  </div>
</template>

<script>
  import Search from '@/components/search/search'
  import ImgModel from '@/components/imgModel/imgModel'
  export default {
    components: {
      Search,ImgModel
    },
    data() {
      return {
        searchVal: '',
        isShow: true,
        // offsetTop: document.body.offsetTop,
      }
    },
    mounted() {
      // console.log(document.body.offsetHeight)
      // console.log(document.body.offsetTop)
      // console.log(document.body.clientHeight)
      // console.log(this.offsetTop)
      window.addEventListener('scroll',this.rollingheight,true)
    },
    watch:{
      // offsetTop(val) {
      //   console.log(val)
      // }
    },
    methods: {
      rollingheight(e){
        console.log(window.pageYOffset)
        // if (window.pageYOffset>0) {
        //   this.isShow = false
        //   console.log(this.isShow)
        // } else {
        //   this.isShow = true
        // }
      },
    }
  }
</script>

<style lang="less" scoped>
  .home-main{
    .home-center{
      padding-top: 54px;
    }
  }
</style>