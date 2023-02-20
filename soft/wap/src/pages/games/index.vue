<template>
  <div>
    <!-- 人物 -->
    <div class="peo-main">
      <div class="model">
        <div class="model-one">
          <img :class="type === '1' ? 'active':''" src="../../assets/images/imgmodel/2.jpg" alt=""/>
          <span :class="type === '1' ? 'active':''">本人</span>
        </div>
        <div class="two">
          <div>数量: {{people.nums}}</div>
          <div>步数: {{people.steps}}</div>
        </div>
      </div>
      <div class="model">
        <div class="model-one">
          <span :class="type === '2' ? 'active':''">机器人</span>
          <img :class="type === '2' ? 'active':''" src="../../assets/images/index/vlogo.png" alt=""/>
        </div>
        <div class="model-two two">
          <div>{{ai.nums}} :数量</div>
          <div>{{ai.steps}} :步数</div>
        </div>
        <div style="clear:both"></div>
      </div>
    </div>
    <!-- 棋盘 -->
    <div class="checkerboard">
      <div class="grid-model">
        <div 
          @click="!isLoading ? type ==='1' ? select(item,index) : ()=>{} : ()=>{}" 
          v-for="(item,index) in list" 
          :key="index"
        >
          {{item}}
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="one">{{isLoading ? '操作中...' : type === '1' ? '请开始' : '机器人思考中...'}}</div>
      <div class="but">
        <div @click="ruleModel">规则</div>
        <div class="cen">当前数： {{totals}}</div>
        <div @click="repentModel">悔棋</div>
      </div>
    </div>
    <!-- 规则 -->
    <Rule/>
    <!-- 悔棋 -->
    <Repent/>
    <!-- 游戏结束 -->
    <Over/>
  </div>
</template>

<script>
import Rule from './stick/stick.vue'
import Repent from './stick/repent.vue'
import Over from './stick/over.vue'

export default {
  components:{
    Rule, Repent, Over
  },
  data() {
    return {
      isLoading: false,
      type: '1', // 1 本人 2 机器人
      people: {
        nums: 0,
        steps: 0
      },
      ai: {
        nums: 0,
        steps: 0
      },
      total: 30,
      list: [3,3,3,3,3,3,3,3,3,3],
      timer: null,
      numTotal: 0, // 结束本轮 获得的数量值
    }
  },
  computed: {
    totals() {
      return this.total - this.people.nums - this.ai.nums
    }
  },
  watch: {
    type: {
      handler(newVal, oldVal) {
        if (newVal === '2') {
          // 数组为空 不操作
          if (this.list.filter(item=>item>0).length > 0 ){
            // 机器人两秒后随机选择一个
            setTimeout(()=>{
              let i = this.getValues();
              if (this.list[i] > 0) {
                this.select(this.list[i],i)
              }
            },2000)
          }
        }
      },
    }
  },
  methods:{
    // 判断哪个数组下标有值
    getValues() {
      if ( this.list[0] > 0) {
        return 0;
      } else if (this.list[1] > 0) {
        return 1;
      } else if (this.list[2] > 0) {
        return 2;
      } else if (this.list[3] > 0) {
        return 3;
      } else if (this.list[4] > 0) {
        return 4;
      } else if (this.list[5] > 0) {
        return 5;
      } else if (this.list[6] > 0) {
        return 6;
      } else if (this.list[7] > 0) {
        return 7;
      } else if (this.list[8] > 0) {
        return 8;
      } else if (this.list[9] > 0) {
        return 9;
      } else {
        return 0;
      }
    },
    // 选择
    async select(item,index){
      // 操作中 禁止执行
      this.isLoading = true;

      // 不能选0 或 都为0 不能进行操作了
      if(item === 0) return;
      console.log(item,index)

      // 将选的值变为0
      this.list.splice(index, 1, 0)
      // 定时添加操作
      this.getAdd(item,index)
      // 返回最后一个下标
      let i = await this.getReAdd(item,index); 
      // 再次执行
      this.getTwoClick(i);

      console.log(i)
      console.log(this.list)
    },
    // 返回判断 二次点击
    getTwoClick(index){
      let i = index;
      this.numTotal = 0;
      // 最后一位则 归零
      if (i===this.list.length-1) {
        i=0;
        // 判断下一位 有没有值 有值继续执行
        if (this.list[i] !== 0) {
          this.select(this.list[i],i) // 继续执行
        } else {
          // 取值 直接取
          this.numTotal = this.list[i+1];
          // 清空 
          this.list.splice(i+1,1,0);
          this.getNum();
        }
      } else {
        // 判断下一位 有没有值 有值继续执行
        if (this.list[i+1] !== 0) {
          this.select(this.list[i+1], i+1) // 继续执行
        } else {
          // 取值 判断下标 
          if (i+2>this.list.length-1){ // 此时正好取到了首位
            this.numTotal = this.list[0];
            // 清空 
            this.list.splice(0,1,0);
            this.getNum();
          } else {
            this.numTotal = this.list[i+2];
            // 清空 
            this.list.splice(i+2,1,0);
            this.getNum();
          }
        }
      }
    },
    // 定时 执行 加的操作
    getAdd(item,index){
      let num = item;
      let i = index;
      // 每一秒 移动一次
      this.timer = setInterval(()=>{
        if(num === 0 ) {
          clearInterval(this.timer);
        }
        if(num !== 0) {
          if(i === this.list.length-1) {
            this.list.splice(0,1,this.list[0]+1);
            i=0;
          } else {
            this.list.splice(i+1,1,this.list[i+1]+1);
            i++;
          }
          num--;
        }
        console.log(this.list,i)
      },1000)
    },
    // 重新执行 操作
    getReAdd(item,index) {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          clearInterval(this.timer);
          // 计算下标 下标超出 归零 - 重新计算
          if (item+index > this.list.length-1) {
            resolve((item+index) % 9 - 1)
          } else {
            resolve(item+index);
          }
        },item*1000+1000+1000)
      })
    },
    // 赋值
    getNum() {
      // 隐藏loading
      this.isLoading = false;
      // 执行完了 赋值
      if(this.type === '1') {
        this.people.nums += this.numTotal;
        this.people.steps += 1;
        // this.type = '2';
      } else {
        this.ai.nums += this.numTotal;
        this.ai.steps += 1;
        // this.type = '1';
      }
      // 游戏结束
      if(!this.getGameOver()) return;
      // 换角色
      if (this.type === '1') {
        this.type = '2';
      } else {
        this.type = '1';
      }
    },
    // 判断是否结束
    getGameOver(){
      if (this.list.filter(item=>item>0).length > 0 ){
        return true;
      } else {
        // 结束 弹框
        this.getOver();
        return false;
      }
    },
    // 结束弹框
    getOver() {
      this.$store.dispatch('getStick3', true)
    },
    // 规则弹框
    ruleModel() {
      this.$store.dispatch('getStick1', true)
    },
    // 悔棋弹框
    repentModel() {
      this.$store.dispatch('getStick2', true)
    }
  },
}
</script>


<style lang='less' scoped>
  .peo-main{
    font-size: 18px;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .model{
      .model-one{
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        box-sizing: border-box;
        img{
          width: 40px;
          height: 40px;
          display: block;
          border-radius: 50%;
          border: 1px solid #b5b5b5;
          &.active{
            border: 1px solid #46da21;
          }
        }
        >span{
          padding: 0 12px;
           &.active{
            color: #46da21;
          }
        }
      }
      .model-two{
        float: right;
      }
      .two{
        >div:first-child{
          margin-bottom: 6px;
        }
      }
    }
  }
  .checkerboard{
    font-size: 18px;
    padding: 30px 12px;
    box-sizing: border-box;
    margin-top: 20px;
    .grid-model{
      cursor: pointer;
      display: grid;
      // 列宽
      grid-template-columns: 20% 20% 20% 20% 20%;
      // 行高
      grid-template-rows: 60px 60px;
      >div{
        border: 1px solid #8e8d8d;
        text-align: center;
        line-height: 60px;
      }
    }
  }
  .footer{
    padding: 12px;
    box-sizing: border-box;
    .one{
      font-size: 20px;
      padding: 12px;
      box-sizing: border-box;
      text-align: center;
    }
    .but{
      margin-top: 30px;
      font-size: 18px;
      display: flex;
      display: flex;
      justify-content: space-around;
      align-items: center;
      >div{
        cursor: pointer;
        background: #3399ff;
        border-radius: 4px;
        padding: 8px 16px;
        color: #fff;
        &.cen{
          background: #e5e5e5;
          color: #000;
          width: 100px;
        }
      }
      >span{
        width: 80px;
      }
    }
  }
</style>