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
        tooltip: {
          trigger: 'item'
        },
        // legend: {
        //   top: '5%',
        //   left: 'center'
        // },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              // position: 'center'
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: '40',
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048},
              { value: 735},
              { value: 580},
              { value: 484},
              { value: 300}
            ]
          }
        ]
      })
    }
  }
   
}
</script>

<style lang="scss" scoped>
  .echarts{
    width: 100%;
    height: 60px;
  }
</style>