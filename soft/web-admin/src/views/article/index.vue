<template>
  <div class="novel-main">
    <!-- 关键字搜索 -->
    <div class="search-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="作者">
              <el-input v-model="form.author" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="标题">
              <el-input v-model="form.title" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="类型">
              <el-select v-model="form.selectVal" clearable placeholder="请选择">
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
    <!-- 列表 -->
    <div class="novel-list">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="author" label="作者"></el-table-column>
        <el-table-column label="类型">
           <template slot-scope="scope">
            <span>{{scope.row.type | articleTypeToName}}</span>
          </template>
        </el-table-column>
        <el-table-column label="封面">
          <template slot-scope="scope">
            <img :src="getImg(scope.row.img)"/>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="创建日期" width="180"></el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
            <el-button type="text" @click="look(scope.row)">查看</el-button>
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
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
    <div class="novel-main-bot">
      <el-button type="primary" @click="typeAdd">新增</el-button>
    </div>
    <!-- 新增 -->
    <Add 
      :dialogFormVisible="dialogFormVisible" 
      @toClose="()=>{dialogFormVisible=false}"
      @toDetermine="toDetermine"
    />
  </div>
</template>

<script>
import Add from './components/add';

export default {
  components: {
    Add
  },
  data() {
    return {
      form: {
        author: '', // 作者
        title: '', // 标题
        selectVal: '' // 类型
      }, // 表单数据
      options: [
        // {
        //   value: '01',
        //   label: '最新'
        // },
        // {
        //   value: '02',
        //   label: '最热'
        // }, 
        {
          value: '03',
          label: '人文'
        }, 
        {
          value: '04',
          label: '科技'
        },
        {
          value: '05',
          label: '历史'
        },
        {
          value: '06',
          label: '经济'
        },
        {
          value: '07',
          label: '诗词'
        }, 
        {
          value: '08',
          label: '歌赋'
        }, 
        {
          value: '09',
          label: '散文'
        },
      ], // 下拉列表
      tableData: [
        {
          id: "1",
          title: "生与死",
          author: "山鬼",
          type: "03",
          img: "1.jpg",
          date: "2020-02-02",
          flag: "hot",
        },
      ], // 列表数据
      currentPage: 1, // 第几页
      total: 400, // 总页数
      pageSize: 10, // 一页几条
      dialogFormVisible: false, // 新增显隐
    }
  },
  methods: {
    // 查询
    onSubmit() {
      console.log('submit!');
    },
    // 查看
    look(row) {
      console.log(row);
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
    typeAdd() {
      this.dialogFormVisible = true
    },
    // 新增-确定
    toDetermine() {
      this.dialogFormVisible = false
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
