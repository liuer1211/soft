<template>
  <div class="peo-detail-main">
    <div class="model-main">
      <h1>{{obj.name}}</h1>
      <div>{{sect.name}}</div>
      <div>{{kungfu.join('/')}}</div>
      <div>{{obj.instro}}</div>
      <p v-html="obj.descr"></p>
    </div>
    <div class="bg-main"></div>
    <!-- 右侧浮框 -->
    <!-- <RightModel></RightModel> -->
  </div>
</template>

<script>
import RightModel from '@/components/rightModel/rightModel'

export default {
  components: {
    RightModel
  },
  data() {
    return {
      obj: {
        // "id": 1,
        // "name": "夜灵犀",
        // "instro": "燕云山庄",
        // "descr": "年少成名，一手绝技独步江湖。对于他的本事，江湖中人都是这样流传的“锦绣一挥，神佛难挡”。",
        // "img": "22.jpg",
        // "createTime": "2022-07-15 15:04:13",
        // "novalId": 1,
        // "kungFu": "1",
        // "sect": "1"
      },
      sect: '', // 门派
      kungfu: [], // 功夫
      // kun: '', // 功夫
    }
  },
  mounted() {
    // console.log(this.$route.params.data);
    this.getInit();
  },
  methods:{
    // 初始数据
    getInit() {
      if (this.$route.params.data) {
        this.obj = this.$route.params.data;
        // 门派
        if (this.obj.sect) {
          this.sect = this.$store.state.novel.novelSectList.find((item)=>{
            // console.log(item, this.obj.sect, item.sect === this.obj.sect)
            return item.id.toString() === this.obj.sect;
          })
        }
        // 功夫
        if(this.obj.kungFu) {
          this.obj.kungFu.split(',').forEach((kun)=>{
            this.$store.state.novel.novelKungfuList.forEach((item)=>{
              if (kun === item.id.toString()) {
                this.kungfu.push(item.name)
              }
            })
          })
        }
        // console.log(this.kungfu)
      } else {
        this.$router.back();
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .peo-detail-main {
    .model-main {
      position: absolute;
      top: 0;
      // overflow: auto;
      width: 100%;
      padding: 12px;
      box-sizing: border-box;
      z-index: 99;
      font-size: 15px;
      color: #000;
      h1 {
        font-size: 18px;
      }
      >div {
        margin-top: 12px;
        line-height: 20px;
      }
      >p {
        margin-top: 12px;
        line-height: 24px;
        word-wrap: break-word;
        word-break: break-all;
        text-indent: 20px;
      }
    }
    .bg-main {
      overflow: hidden;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9;
      background: #cdb58d;
    }
    .img-main {
      overflow: hidden;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      background: url(../../../assets/images/people/y.jpg) no-repeat;
      background-size: 100% 100%;
      opacity: 0.2;
    }
  }
</style>