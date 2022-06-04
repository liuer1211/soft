<template>
  <div>
    <!-- 新增 -->
    <el-dialog title="新增" :visible.sync="dialogFormVisible" fullscreen center :show-close="false">
      <!-- 第一层 -->
      <div class="model-one">
        <el-form :model="formAddOne">
          <el-row>
            <el-col :span="12">
              <el-form-item label="书名" :label-width="formLabelWidth">
                <el-input v-model="formAddOne.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="作者" :label-width="formLabelWidth">
                <el-input v-model="formAddOne.author"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="书籍类型" :label-width="formLabelWidth">
                <el-select v-model="formAddOne.type" clearable multiple placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="内容类别" :label-width="formLabelWidth">
                <el-select v-model="formAddOne.infoType" clearable multiple placeholder="请选择">
                  <el-option
                    v-for="item in optionsType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <!-- 简介 -->
            <el-col :span="24">
              <el-form-item label="简介" :label-width="formLabelWidth">
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
            <!-- 视频 -->
            <el-col :span="12">
              <el-form-item label="上传视频" :label-width="formLabelWidth">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
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
      optionsType: [
        {
          value: '01',
          label: '人物'
        },
        {
          value: '02',
          label: '武学'
        }, 
        {
          value: '03',
          label: '门派'
        }, 
        {
          value: '04',
          label: '兵器'
        },
        {
          value: '05',
          label: '宿命'
        },
        {
          value: '06',
          label: '其他'
        }
      ], // 下拉列表 内容类别
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
      ], // 下拉列表 书籍类型
      formAddOne: { // 新增数据
        title: "",
        author: "",
        type: [],
        img: "",
        des: "",
        infoType: [],
        // date: "2020-02-02",
        // flag: "hot",
        // link: "yelingxi",
      },
      formLabelWidth: '120px',
      fileList: [
        // {
        //   name: 'food.jpeg', 
        //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        // }, 
      ]
    }
  },
  methods:{
    // 取消
    toClose() {
      this.$emit("toClose",false)
    },
    // 确定
    toDetermine() {
      console.log("",this.formAddOne)
      this.$message({
        message: '成功！',
        type: 'success'
      });
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
    // 上传视频
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  }
}
</script>

<style lang="scss" scoped>
  .model-one{
    ::v-deep .el-form{
    }
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
