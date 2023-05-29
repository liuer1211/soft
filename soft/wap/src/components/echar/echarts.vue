<template>
  <div class="echarts" ref="echarts"></div>
</template>

<script>
export default{
  data() {
    return{

    }
  },
  mounted(){
    this.getInit();
  },
  methods:{
    getInit() {
      // 初始化
      let lineEcharts = this.$echarts.init(this.$refs.echarts);
      lineEcharts.setOption({
        xAxis:{
          // 均分
          type:'category'
        },
        yAxis:{
          show:false,
        },
        //系列
        series:[
          {
            type:'bar',
            data:[10,12,25,8,23,56,99],
            color: '#21c2ff'
          }
        ],
        tooltip:{},
        grid:{
          top:0,
          bottom:0,
          left:0,
          right:0,
        }
      })
    }
  }
   
}
</script>

<style lang="less" scoped>
  .echarts{
    width: 100%;
    height: 180px;
  }
</style>