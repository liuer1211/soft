<template>
  <div class="people-main">
    <!-- 第一层 -->
    <div v-show="flag">
      <!-- 关键字搜索 -->
      <div class="search-main">
        <el-form ref="form" :model="form" label-width="80px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="编号">
                <el-input v-model="form.num" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="名字">
                <el-input v-model="form.name" clearable></el-input>
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
      <!-- 列表 -->
      <div class="novel-list">
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column prop="num" label="编号"></el-table-column>
          <el-table-column prop="name" label="书籍名"></el-table-column>
          <el-table-column label="操作" width="120">
            <template>
              <el-button type="text" @click="look">查看</el-button>
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
    </div>
    <!-- 第二层 -->
    <div v-show="!flag">
      <!-- 关键字搜索 -->
      <div class="search-main">
        <el-form ref="forms" :model="forms" label-width="80px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="姓名">
                <el-input v-model="forms.name" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item>
                <el-button type="primary" @click="onSubmitTwo">查询</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <!-- 列表 -->
      <div class="novel-list">
        <el-table :data="tableDatas" border stripe style="width: 100%">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="sect" label="门派"></el-table-column>
          <el-table-column prop="kungfu" label="功夫"></el-table-column>
          <el-table-column label="头像">
            <template slot-scope="scope">
              <img :src="getImg(scope.row.img)"/>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="120">
            <template>
              <el-button type="text">查看</el-button>
              <el-button type="text">修改</el-button>
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
          @size-change="handleSizeChanges"
          @current-change="handleCurrentChanges"
        >
        </el-pagination>
      </div>
      <!-- 底部按钮 -->
      <div class="novel-main-bot">
        <el-button type="primary" @click="typeAdd">新增</el-button>
        <el-button @click="toBack">返回</el-button>
      </div>
      <!-- 新增 -->
      <Add
        :dialogFormVisible="dialogFormVisible" 
        @toClose="()=>{dialogFormVisible=false}"
        @toDetermine="toDetermine"
      />
    </div>
  </div>
</template>

<script>
import Add from './components/add'
export default {
  components: {
    Add
  },
  data() {
    return {
      form: {
        id: '', 
        num: '', // 编号
        name: '', // 名字
      }, // 表单数据 第一层
      tableData: [
        {
          id: '1',
          num: '0001',
          name: '夜灵犀传奇'
        },
        {
          id: '2',
          num: '0002',
          name: '血雨江湖'
        },
      ], // 列表数据 第一层
      currentPage: 1, // 第几页 第一层
      total: 400, // 总页数 第一层
      pageSize: 10, // 一页几条 第一层
      flag: true, // true-显示第一层；false-显示第二层
      forms: {
        name: '', // 名字
      }, // 表单数据 第一层
      tableDatas: [
        {
          id: '1',
          name: '夜灵犀',
          img: '1.jpg',
          sect: "燕云山庄", // 门派
          kungfu: "燕云七绝、乾坤生死诀", // 武功
        },
        {
          id: '2',
          name: '苏晚',
          img: '2.jpg',
          sect: "魔教", // 门派
          kungfu: "音波功", // 武功
        },
      ], // 列表数据 第二层
      currentPages: 1, // 第几页 第二层
      totals: 400, // 总页数 第二层
      pageSizes: 10, // 一页几条 第二层
      dialogFormVisible: false, // 新增显隐
    }
  },
  methods: {
    // 查看 第一层
    look() {
      this.flag = false;
    },
    // 查询 第一层
    onSubmit() {
      console.log('submit!');
    },
    // 条数 第一层
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 第几页 第一层
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
    // 返回 第二层
    toBack() {
      this.flag = true;
    },
    // 条数 第二层
    handleSizeChanges(val) {
      console.log(`每页 ${val} 条`);
    },
    // 第几页 第二层
    handleCurrentChanges(val) {
      console.log(`当前页: ${val}`);
    },
    // 新增 第二层
    typeAdd() {
      this.dialogFormVisible = true
    },
    // 新增-确定
    toDetermine() {
      this.dialogFormVisible = false
    },
    // 查询 第二层
    onSubmitTwo() {
    }
  }
}
</script>

<style lang="scss" scoped>
  .people-main{
    padding: 30px;
    box-sizing: border-box;
    .search-main {
      ::v-deep .el-select {
        width: 100%;
      }
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
</style>
