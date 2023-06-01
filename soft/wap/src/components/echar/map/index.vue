<template>
    <div class="map">
      <div ref="chart" style="width:100%;height:200px;"></div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
    //引入中国地图的JSON数据
    import chinaJSON from './china.json'
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
  //注册中国地图
echarts.registerMap('china', chinaJSON)
        //获取echarts类的实例
      let mycharts = echarts.init(this.$refs.chart);
      //设置配置项
      mycharts.setOption({
        //地图组件
        geo: {
            map: 'china',//中国地图
            // roam: true,//鼠标缩放的效果
            //地图的位置调试
            // left: 150,
            // top: 150,
            // right: 150,
            zoom:1.2,
            // bottom: 0,
            //地图上的文字的设置
            label: {
                // show: true,//文字显示出来
                color: 'white',
                // fontSize: 14
            },

            itemStyle: {
                //每一个多边形的样式
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'blue' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                // opacity: .8
            },
            //地图高亮的效果
            emphasis: {
                itemStyle: {
                    // color: 'red'
                },
                label: {
                    // fontSize: 40
                }
            }
        },
        //布局位置
        grid: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        },
        series: [
            {
                type: 'lines',//航线的系列
                data: [
                    {
                        coords: [
                            [116.405285, 39.904989],  // 起点
                            [119.306239, 26.075302]   // 终点

                        ],
                        // 统一的样式设置
                        lineStyle: {
                            color: 'white',
                            width: 1
                        }
                    },
                    {
                        coords: [
                            [116.405285, 39.904989],  // 起点
                            [114.298572,30.584355]   // 终点

                        ],
                        // 统一的样式设置
                        lineStyle: {
                            color: 'white',
                            width: 1
                        }
                    }
                ],
                //开启动画特效
                effect: {
                    show: true,
                    symbol: 'arrow',
                    color: 'white',
                    symbolSize: 2
                }
            }
        ]
    })
        }}  }
  </script>
  
  <style lang='less' scoped>
  .map{
    background: #000;
  }
  </style>