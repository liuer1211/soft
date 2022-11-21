<template>
  <div class="kungfu-main">
    <div id="cnvasModel">
      <canvas width="375px" height="667px" id="myCanvas">
        <p>Anything in here will be replaced on browsers that support the canvas element</p>
      </canvas>
    </div>
    <div id="tags" style="display: none;">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <a href="javascript:;" >{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reqQueryNovalAttributeList } from '@/axios/index' 
export default {
  data() {
    return {
      tagArr:[
        {name:'惊雷剑法'},{name:'凤舞九天'},{name:'乾坤生死决'},{name:'燕云七绝'},
        {name:'扶摇九天'},{name:'迷魂大法'},{name:'弹指沁音'},{name:'混元功'},
        {name:'魅影迷踪'},{name:'伏魔功'},{name:'昔月剑法'}
      ],
      list:[]
    }
  },
  mounted() {
    // console.log(this.$route.params);
    this.getListDetail();
  },
  watch: {
    list:{
      handler(newval,oldval) {
        this.$nextTick(()=>{
          this.getInit();
        })
      },
      deep: true,
    }
  },
  methods:{
    // 初始数据
    async getListDetail() {
      try {
        // 首页进入
        if (this.$route.params.id) {
          // 查询功夫
          let res2 = await reqQueryNovalAttributeList({
            novalId: this.$route.params.id.toString(),
            attribute: this.$route.params.data.code
          });
          if (res2.responseCode && res2.responseCode === '0000') {
            this.list = res2.result
            this.$store.dispatch('getNovelKungfuList',this.list)
          }
          // console.log(this.list)
        } else {
          // 详细页返回
          if (this.$store.state.novel.novelKungfuList && this.$store.state.novel.novelKungfuList.length) {
            this.list = this.$store.state.novel.novelKungfuList
          } else {
            this.$router.go(-1);
          }
        }
      } catch(e){
        this.list = [{
          "id": '3',
          "name": "乾坤生死决",
          "instro": "",
          "descr": "",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "kungFu": "",
          "sect": ""
        },{
          "id": '4',
          "name": "燕云七绝",
          "instro": "",
          "descr": "",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "kungFu": "",
          "sect": ""
        },{
          "id": '5',
          "name": "扶摇九天",
          "instro": "",
          "descr": "",
          "img": "",
          "createTime": "2022-07-16 16:10:51",
          "novalId": '1',
          "kungFu": "",
          "sect": ""
        }]
        this.$store.dispatch('getNovelKungfuList',this.list)
      }
    },
    // 初始面板
    getInit() {
      try {
        TagCanvas.Start('myCanvas', 'tags', {
          textColour: '#f1ef5c',
          dragControl: 1,
          decel: 0.95,
          textHeight: 20,
          minSpeed: 0.01,
          initial: [0.1,0.1],
        });
      } catch (e) {
        document.getElementById('cnvasModel').style.display = 'none';
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .kungfu-main {
    display: flex;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #000;
    overflow: hidden;
    >div {
      animation: toshow 2s;
    }
    .canvas {
      background-color: #000000;
    }
    a {
      font-weight: 600;
      text-shadow: 0.02667rem 0.02667rem 0.10667rem #7c7c7c;
    }
  }
</style>