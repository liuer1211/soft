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
            // show:false,
            type: 'category',
            // boundaryGap: false,
            data: ['昨天', '今天', '明天', '16', '17', '18']
          },
          yAxis: {
            // show:false,
            type: 'value'
          },
          series: [
            {
              // name: '最高温',
              type: 'line',
              // stack: 'Total',
              data: [30, 28, 30, 30, -8, 30],
              // 拐点样式 没有小圆点
              itemStyle:{
                opacity:0,
              },
              // 线条样式
              lineStyle: {
                color: '#0e7deb'
              },
              // 填充颜色
              areaStyle: {
                color: {
                  type: 'linear',
                  x:0,
                  y:0,
                  x2:0,
                  y2:1,
                  colorStops:[
                    {offset:0,color:'#3399ff'},
                    {offset:1,color:'#fff'}
                  ],
                  global: false,
                }
              }
            },
            // {
            //   // name: '最低温',
            //   type: 'line',
            //   // stack: 'Total',
            //   data: [15, 16, 18, 22, -1, 15]
            // }
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