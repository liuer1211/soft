<template>
  <div>
    <div ref="chart" style="width:100%;height:200px;"></div>
  </div>
</template>

<script>
import 'echarts-liquidfill'
import * as echarts from 'echarts';
export default {
  mounted(){
    this.getEchartData()
  },
  methods: {
    getEchartData() {
      // const chart = this.$refs.chart
      // if (chart) {
      //   const myChart = this.$echarts.init(chart);
      //   const option = {
      //     //标题组件
      //     title: {
      //         text: '水球图'
      //     },
      //     //x|y轴组件
      //     xAxis: {},
      //     yAxis: {},
      //     //系列:决定你展示什么样的图形图标
      //     series: {
      //       type: 'liquidFill',//系列
      //       data: [0.6, 0.4, 0.2],//展示的数据
      //       waveAnimation: true,//动画
      //       animationDuration: 3,
      //       animationDurationUpdate: 0,
      //       radius: '100%',//半径
      //       outline: {//外层边框颜色设置
      //           show: true,
      //           borderDistance: 8,
      //           itemStyle: {
      //               color: 'skyblue',
      //               borderColor: '#294D99',
      //               borderWidth: 8,
      //               shadowBlur: 20,
      //               shadowColor: 'rgba(0, 0, 0, 0.25)'
      //           }
      //       },
      //     },
      //   };
      //   myChart.setOption(option)
      // }

      //获取echarts类的实例
    let mycharts = echarts.init(this.$refs.chart);
    //设置实例的配置项
    mycharts.setOption({
        //标题组件
        title: {
            text: '水球图'
        },
        //x|y轴组件
        xAxis: {},
        yAxis: {},
        //系列:决定你展示什么样的图形图标
        series: {
            type: 'liquidFill',//系列
            data: [0.6, 0.4, 0.2],//展示的数据
            waveAnimation: true,//动画
            animationDuration: 3,
            animationDurationUpdate: 0,
            radius: '100%',//半径
            outline: {//外层边框颜色设置
                show: true,
                borderDistance: 8,
                itemStyle: {
                    color: 'skyblue',
                    borderColor: '#294D99',
                    borderWidth: 8,
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.25)'
                }
            },
        },
        //布局组件
        grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }

    })
    },
  } 
}
</script>

<style lang='less' scoped>

</style>