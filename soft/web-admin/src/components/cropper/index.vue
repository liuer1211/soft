<template>
  <div>
    <div class="img-bor" style="width: 160px;height: 200px;" @click="getUpload">
      <i v-if="imgBase64 === ''" class="el-icon-plus"></i>
      <img v-else :src="imgBase64"/>
    </div>
    <el-dialog title="提示" :visible.sync="flag" width="80%" top="2vh" append-to-body>
      <ACropper 
        ref="cropperImage" 
        :optionInfo="optionInfo" 
      ></ACropper>
      <el-button size="small" type="primary" @click="finishCropper" style="margin-top: 30px">上传文件</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionInfo: { 
        // autoCrop: true,
        // fixed: false,
        // fixedNumber: [4,5],
        // fixedBox: true, // 固定截图框大小 不允许改变
        autoCropWidth: 160,
        autoCropHeight: 200,
      },
      flag: false,
      imgBase64: '',
    }
  },
  methods:{
    finishCropper() {
      // 获取截图的base64 数据
      this.$refs.cropperImage.$refs.cropper.getCropData((data) => {
        this.flag = false;
        this.imgBase64 = data;
        // 小于3M，这里计算后的大小有误差，取值大一点
        if (this.base64ImageSize(data)/1024 > 4) {
          this.$message.error('上传图片不能大于3M')
          return;
        }
        console.log('==',)  
        console.log(data)  
      })
      // 获取截图的blob数据
      this.$refs.cropperImage.$refs.cropper.getCropBlob(data => {
        this.flag = false;
        console.log(data)
      })
    },
    getUpload() {
      this.flag = true;
    },
    // 获取base64图片大小
    base64ImageSize(base64url) {
      // 获取base64图片大小，返回KB数字
      // var let = base64url.replace('data:image/jpeg;base64,', '');
      // 这里根据自己上传图片的格式进行相应修改
      let str = base64url; //这里根据自己上传图片的格式进行相应修改
      let strLength = str.length;
      let fileLength = parseInt(strLength - (strLength / 8) * 2);
      // 由字节转换为KB
      let size = "";
      size = (fileLength / 1024).toFixed(2);
      return parseInt(size);
    }
  }
}
</script>

<style lang="scss" scoped>
  .img-bor {
    background: #ebebeb;
    text-align: center;
    line-height: 200px;
    border-radius: 4px;
    cursor: pointer;
    ::v-deep .el-icon-plus {
      font-size: 30px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
</style>
