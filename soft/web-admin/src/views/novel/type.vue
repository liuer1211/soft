<template>
  <div class="novel-main">
    <!-- 列表 -->
    <div class="novel-list">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="value" label="键"></el-table-column>
        <el-table-column prop="label" label="值"></el-table-column>
        <el-table-column label="操作" width="120">
          <template>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
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
    <el-dialog title="新增" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="键" :label-width="formLabelWidth">
          <el-input v-model="form.value"></el-input>
        </el-form-item>
        <el-form-item label="值" :label-width="formLabelWidth">
          <el-input v-model="form.label"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
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
      ], // 列表数据
      currentPage: 1, // 第几页
      total: 400, // 总页数
      pageSize: 10, // 一页几条
      dialogFormVisible: false, // 新增显隐
      form: { // 新增数据
        value: '',
        label: '',
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    // 条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 第几页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 新增
    typeAdd() {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .novel-main{
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
