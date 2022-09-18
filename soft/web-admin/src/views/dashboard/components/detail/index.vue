<template>
  <div>
    <div>
      <slot name="tit" :value='tits'></slot>
    </div>
    <div>
      <slot name="top"></slot>
    </div>
    <div class="detail-border">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>

export default{
  props:['tits'],
  data() {
    return{

    }
  },
  created() {
    // console.log(this.tits)
  }
}
</script>

<style lang="scss" scoped>
  .detail-border{
    margin-top: 8px;
    padding:8px 0 0;
    border-top: 1px solid #eee;
    box-sizing: border-box;
  }
</style>