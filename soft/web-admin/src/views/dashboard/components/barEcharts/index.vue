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
          min:0,
          max:100
        },
        yAxis:{
          show:false,
          // 均分
          type:'category'
        },
        //系列
        series:[
          {
            type:'bar',
            data:[56],
            // 柱状图宽
            barWidth: 10,
            color:'yellowgreen',
            // 背景颜色设置
            showBackground: true,
            backgroundStyle:{
              color:'#eee',
            },
            // 文本
            label:{
              show:true,
              // 改变文本内容
              formatter:'|',
              // 内容位置
              position:'right',
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