<template>
  <div>
    <div ref="chart" style="width:100%;height:200px;"></div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.getEchartData()
  },
  methods: {
    getEchartData() {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart);
        const option = {
          title: {
            // text: '归属地：上海'
          },
          tooltip: {
            // trigger: 'axis'
          },
          legend: {
            // data: ['最高温','最低温']
          },
          grid: {
            top: '18%',
            left: '4%',
            right: '4%',
            bottom: '4%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            // boundaryGap: false,
            data: ['昨天', '今天', '明天', '16', '17', '18']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              // name: '最高温',
              type: 'line',
              // stack: 'Total',
              data: [30, 28, 30, 30, -8, 30]
            },
            {
              // name: '最低温',
              type: 'line',
              // stack: 'Total',
              data: [15, 16, 18, 22, -1, 15]
            }
          ]
        };
        myChart.setOption(option)
      }
    },
  } 
}
</script>

<style lang='less' scoped>

</style>