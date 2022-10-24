<template>
  <div class="novel-main" id="print">
    <!-- 关键字搜索 -->
    <div class="search-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="书名">
              <el-input v-model="form.title" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="作者">
              <el-input v-model="form.author" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="类型">
              <el-select v-model="form.selectVal" clearable multiple placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 头部按钮 -->
    <div style="padding:12px 0;">
      <el-button type="primary" @click="typeAdd('')">新增</el-button>
      <el-button type="">修改</el-button>
      <el-button type="primary">删除</el-button>
      <el-button type="">上传</el-button>
      <el-button type="primary">导出</el-button>
      <el-button type="" @click="print">打印</el-button>
    </div>
    <!-- 列表 -->
    <div class="novel-list">
      <el-table :data="list" border stripe style="width: 100%">
        <el-table-column prop="num" label="书籍编号"></el-table-column>
        <el-table-column prop="title" label="书名" width="180"></el-table-column>
        <el-table-column prop="author" label="作者"></el-table-column>
        <el-table-column label="类型" prop="titleTypeName">
          <!-- <template slot-scope="scope">
            <span>{{scope.row.type | novelTypeToNames}}</span>
          </template> -->
        </el-table-column>
        <el-table-column label="封面">
          <template slot-scope="scope">
            <img :src="`http://180.76.106.221:5010/images/novel/${scope.row.imgName}`"/>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建日期" width="180"></el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
            <!-- <el-button type="text">查看</el-button> -->
            <el-button type="text" @click="typeAdd(scope.row)">编辑</el-button>
            <!-- <el-button type="text">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        background
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        :total="total"
        layout="prev, pager, next, jumper, ->, sizes, total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <!-- 底部按钮 -->
    <!-- <div class="novel-main-bot">
      <el-button type="primary" @click="typeAdd('')">新增</el-button>
    </div> -->
    <!-- 新增 -->
    <Add 
      :dialogFormVisible="dialogFormVisible" 
      @toClose="()=>{dialogFormVisible=false}"
      @toDetermine="toDetermine"
      :detail="detail"
    />
  </div>
</template>

<script>
import Add from './components/add';
import { reqQueryNovelList } from '@/api/index' 
import Print from 'print-js'

export default {
  components: {
    Add
  },
  data() {
    return {
      form: {
        title: '', // 书名
        author: "", // 作者
        selectVal: [] // 类型
      }, // 表单数据
      options: [
        {
          value: '01',
          label: '武侠'
        },
        {
          value: '02',
          label: '爱情'
        }, 
        {
          value: '03',
          label: '家国'
        }, 
        {
          value: '04',
          label: '文艺'
        },
        {
          value: '05',
          label: '青春'
        }
      ], // 下拉列表
      tableData: [
        {
          id: "1",
          num: "0001",
          title: "夜灵犀传奇",
          author: "六耳",
          type: ['01','02'],
          img: "1.jpg",
          date: "2020-02-02",
          flag: "hot",
          link: "yelingxi",
        },
        {
          id: "1",
          num: "0002",
          title: "夜灵犀传奇",
          author: "六耳",
          type: ['01','03'],
          img: "2.jpg",
          date: "2020-02-02",
          flag: "hot",
          link: "yelingxi",
        },
      ], // 列表数据
      currentPage: 1, // 第几页
      total: 400, // 总页数
      pageSize: 10, // 一页几条
      dialogFormVisible: false, // 新增显隐
      list:[
        {
          actDate: "20220522",
          author: "六耳",
          context: "<p>相传三国时期，铸剑名家打造了三把赫赫有名的宝剑，分别是：黑曜、赤灵、素渊。\r\n传闻只要三者得其一便可得天下，而这三把宝剑也被魏蜀吴三国的君主各占其一。随着时代的更迭，这三把宝剑也辗转不知了去向。</p> <p>几百年后青莲剑客以一篇《蜀道难》送友人入蜀，传闻这其间还有另鲜为人知的一个秘密。有传言黑曜当时正巧在蜀地现世，像李白这样的剑客又怎能不心动。若得其剑，传一封书信，纵使所隔千里，势必星夜赶至。但是天意弄人，青莲剑客至死也未曾得见这把旷世宝剑。</p> <p>又几百年过去了，又传言这把宝剑在小重山出现，霎时间，江湖又起波澜。曾记得，十年前，一位年纪不满二十的少年横空出世，打破了沉寂已久的江湖，此人便是夜灵犀。没有人知道这少年从何处来，师承何门何派，只记得他只身一人前往少林，挑战主持方丈后全身而退。如今，黑曜现世，又将会带给他怎样的劫数。</p>",
          createTime: "2022-05-22 13:27:50",
          id: 1,
          imgName: "1.jpg",
          instro: "年少热血气如虹，暮年病榻万事空。江湖纷争几时休，笑看痴人坠其中。",
          num: "0000001",
          title: "夜灵犀传奇",
          titleTypeCode: "01,02",
          titleTypeName: "武侠/爱情",
          updateTime: "2022-07-15 14:45:27",
          videoName: "001.mp4",
        }
      ],
      detail: {}
    }
  },
  created() {
    this.getDate();
  },
  methods: {
    // 获取数据
    async getDate(){
      let params = {};
      let data = await reqQueryNovelList(params);
      // console.log(data)
      if (data.responseCode && data.responseCode === '0000') {
        this.list = data.result;
        // console.log(this.list)
      }
    },
    // 查询
    onSubmit() {
      console.log('submit!');
    },
    // 条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 第几页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 动态拼接图片地址
    getImg(data) {
      if(data) {
        let img = require(`../../assets/user/${data}`)
        return img;
      }
    },
    // 新增
    typeAdd(data) {
      if (data) {
        this.detail = data
      } else {
        this.detail = {}
      }
      this.dialogFormVisible = true;
    },
    // 新增-确定
    toDetermine() {
      this.dialogFormVisible = false
    },
    // 打印
    print() {
      Print({
        printable: 'print',
        type: 'html',
        documentTitle: '文档标题',
        header: '',
        headerStyle: 'font-weight:400;text-align:center;',
        style: '@page {margin: 0 10mm};', // 不打印页眉和页脚
        honorColor: true, // 是否打印彩色文本
        targetStyles: ['*'] // 允许打印所有样式属性
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .novel-main{
    padding: 30px;
    box-sizing: border-box;
    .search-main {
    }
    .novel-list {
      img {
        width: 30px;
        object-fit: cover;
        display: block;
      }
    }
    .block {
      margin: 22px 0 0 0;
    }
    .novel-main-bot {
      padding: 22px;
      box-sizing: border-box;
      text-align: center;
    }
  }
  ::v-deep .el-form-item__content{
    text-align: center;
  }
  ::v-deep .el-select {
    width: 100%;
  }
</style>
