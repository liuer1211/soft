<template>
  <div>
    <!-- 新增 -->
    <el-dialog title="新增" :visible.sync="dialogFormVisible" fullscreen center :show-close="false">
      <!-- 第一层 -->
      <div class="model-one">
        <el-form :model="formAddOne">
          <el-row>
            <el-col :span="12">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="formAddOne.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="门派" :label-width="formLabelWidth">
                <el-input v-model="formAddOne.sect"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="武功" :label-width="formLabelWidth">
                <el-input v-model="formAddOne.kungfu"></el-input>
              </el-form-item>
            </el-col>
            <!-- 图片 -->
            <el-col :span="24">
              <el-form-item label="上传头像" :label-width="formLabelWidth">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="formAddOne.img" :src="formAddOne.img" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
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
        name: "",
        des: "",
        sect: "",
        kungfu: "",
        img: "",
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
    // 上传图片处理
    handleAvatarSuccess(res, file) {
      this.formAddOne.img = URL.createObjectURL(file.raw);
    },
    // 上传图片处理
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
    height: 160px;
    line-height: 160px;
    text-align: center;
  }
  ::v-deep .avatar {
    width: 160px;
    height: 160px;
    display: block;
  }
</style>
