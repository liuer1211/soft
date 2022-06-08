<template>
  <div>
    <!-- 新增 -->
    <el-dialog title="新增" :visible.sync="dialogFormVisible" fullscreen center :show-close="false">
      <!-- 第一层 -->
      <div class="model-one">
        <el-form :model="formAddOne">
          <el-row>
            <el-col :span="12">
              <el-form-item label="标题" :label-width="formLabelWidth">
                <el-input v-model="formAddOne.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="作者" :label-width="formLabelWidth">
                <el-input v-model="formAddOne.author"></el-input>
              </el-form-item>
            </el-col>
            <!-- 简介 -->
            <el-col :span="24">
              <el-form-item label="描述" :label-width="formLabelWidth">
                <el-input type="textarea" rows="8" placeholder="请输入内容" v-model="formAddOne.des" maxlength="300" show-word-limit>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="toClose">取 消</el-button>
        <el-button type="primary" @click="toDetermine">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  props:{
    dialogFormVisible: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      formAddOne: { // 新增数据
        des: "",
        title: "",
        author: "",
        // date: "2020-02-02",
        // flag: "hot",
        // link: "yelingxi",
      },
      formLabelWidth: '120px',
    }
  },
  methods:{
    // 取消
    toClose() {
      this.$emit("toClose",false)
    },
    // 确定
    toDetermine() {
      this.$emit("toDetermine",false)
    },
   
  }
}
</script>

<style lang="scss" scoped>
  .model-one {
    .but-cen {
      text-align: center;
    }
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
    width: 160px;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
  ::v-deep .avatar {
    width: 160px;
    height: 200px;
    display: block;
  }
</style>
