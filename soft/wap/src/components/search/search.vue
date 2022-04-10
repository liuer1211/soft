<template>
  <div class="search-main" :class="isShow ? 'active' : ''">
    <van-search v-model="searchValue" :placeholder="placeholder" />
  </div>
</template>

<script>
  export default {
    props: {
      searchVal: {
        type: String,
        default: '',
      },
      isShow: {
        type: Boolean,
        default: true,
      }
    },
    data() {
      return {
        searchValue: this.searchVal,
        placeholder: '今日热词：文明'
      }
    },
    watch: {
      // 监听搜索关键字
      searchValue(newName, oldName) {
        // console.log(newName, oldName)
        // 节流搜索
        getList(newName);
      }
    },
    methods: {
      // 搜索
      getList(newName) {
        // 
      }
    }
  }
</script>

<style lang="less" scoped>
  .search-main{
    position:absolute;
    top: 0;
    width: 100%;
    display: none;
    &.active{
      display: block;
    }
  }
</style>