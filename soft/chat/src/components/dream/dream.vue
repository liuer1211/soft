<template>
  <div class="dream-main">
    <!-- {{isDream}}
    <div @click="close">关闭</div> -->
  </div>
</template>

<script>
export default {
  computed: {
    isDream() {
      // console.log(this.$store.state.common.isDream)
      return this.$store.state.common.isDream;
    }
  },
  data() {
    return {
    }
  },
  methods: {
    // 关闭
    close() {
      this.$store.dispatch('getDream', false)
    }
  }
}
</script>

<style scoped>
  .dream-main {

  }
</style>
