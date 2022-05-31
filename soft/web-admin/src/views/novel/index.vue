<template>
  <div class="novel-main">
    <!-- 关键字搜索 -->
    <div class="search-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="名字">
              <el-input v-model="form.name" clearable></el-input>
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
        <el-table-column prop="title" label="书名" width="180"></el-table-column>
        <el-table-column prop="author" label="作者"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column label="封面">
          <template slot-scope="scope">
            <img :src="getImg(scope.row.img)"/>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="look(scope.row)">查看</el-button>
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
    <el-dialog title="新增" :visible.sync="dialogFormVisible" fullscreen>
      <el-form :model="formAdd">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="formAdd.title"></el-input>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="formAdd.author"></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-select v-model="form.type" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- 图片 -->
        <el-form-item label="上传封面" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="formAdd.img" :src="formAdd.img" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
      form: {
        name: '', // 名字
        selectVal: '' // 类型
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
          title: "夜灵犀传奇",
          author: "六耳",
          type: "武侠/爱情/家国",
          img: "2.jpg",
          date: "2020-02-02",
          flag: "hot",
          link: "yelingxi",
        },
        {
          id: "1",
          title: "夜灵犀传奇",
          author: "六耳",
          type: "武侠/爱情/家国",
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
      formAdd: { // 新增数据
        title: "",
        author: "",
        type: "",
        img: "",
        // date: "2020-02-02",
        // flag: "hot",
        // link: "yelingxi",
      },
      formLabelWidth: '120px',
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
    handleAvatarSuccess(res, file) {
      this.formAdd.img = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
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
  ::v-deep .avatar-uploader .el-upload {
    border: 1px dashed #464545;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  ::v-deep .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  ::v-deep .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  ::v-deep .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
