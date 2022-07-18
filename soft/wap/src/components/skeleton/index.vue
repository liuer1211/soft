<template>
  <div class="sk-main">
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
  .sk-main {
    position: fixed;
    padding: 50px 12px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #fff;
  }
</style>
