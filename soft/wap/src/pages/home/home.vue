<template>
  <div class="home-main">
    <Search :searchVal='searchVal'></Search>
  </div>
</template>

<script>
  import Search from '@/components/search/search'
  export default {
    components: {
      Search
    },
    data() {
      return {
        searchVal: '',
        offsetTop: document.body.offsetTop,
      }
    },
    mounted() {
      console.log(document.body.offsetHeight)
      console.log(document.body.offsetTop)
      console.log(document.body.clientHeight)
      console.log(this.offsetTop)
    },
    watch:{
      offsetTop(val) {
        console.log(val)
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-main{
    font-size: 24px;
    height: 1000px;
  }
</style>