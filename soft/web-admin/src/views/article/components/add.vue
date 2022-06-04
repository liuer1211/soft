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
            <el-col :span="12">
              <el-form-item label="类型" :label-width="formLabelWidth">
                <el-select v-model="formAddOne.type" clearable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <!-- 简介 -->
            <el-col :span="24">
              <el-form-item label="内容" :label-width="formLabelWidth">
                <el-input type="textarea" rows="8" placeholder="请输入内容" v-model="formAddOne.des" maxlength="300" show-word-limit>
                </el-input>
              </el-form-item>
            </el-col>
            <!-- 图片 -->
            <el-col :span="12">
              <el-form-item label="上传封面" :label-width="formLabelWidth">
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
      
      options: [
        {
          value: '01',
          label: '最新'
        },
        {
          value: '02',
          label: '最热'
        }, 
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
      ], // 下拉列表 书籍类型
      formAddOne: { // 新增数据
        title: "",
        author: "",
        type: "",
        img: "",
        des: "",
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
    // 暂存
    toStorage() {
      console.log("",this.formAddOne)
      this.$message({
        message: '暂存成功！',
        type: 'success'
      });
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
    // 上传视频
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
  }
}
</script>

<style lang="scss" scoped>
  .model-one{
    .but-cen{
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
