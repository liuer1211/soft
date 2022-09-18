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
          show:false,
          // 折
          type:'category'
        },
        yAxis:{
          show:false,
        },
        //系列
        series:[
          {
            type:'line',
            data:[10,12,25,8,23,56,99],
            // 拐点样式 没有小圆点
            itemStyle:{
              opacity:0,
            },
            // 线条样式
            lineStyle: {
              color: 'purple'
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
                  {offset:0,color:'purple'},
                  {offset:1,color:'#fff'}
                ],
                global: false,
              }
            }
          }
        ],
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

<style lang="scss" scoped>
  .echarts{
    width: 100%;
    height: 60px;
  }
</style>