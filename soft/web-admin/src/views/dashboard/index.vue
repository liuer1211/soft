<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">首页: {{ name }}</div>
    <div>欢迎使用</div> -->
    <div>
      今日天气
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    padding: 30px;
    box-sizing: border-box;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
