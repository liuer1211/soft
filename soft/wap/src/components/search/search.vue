<template>
  <div>
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
  export default {
    props: {
      searchVal: {
        type: String,
        default: '',
      }
    },
    data() {
      return {
        searchValue: this.searchVal
      }
    },
    watch: {
      searchValue(newName, oldName) {
        // console.log(newName, oldName)
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

</style>