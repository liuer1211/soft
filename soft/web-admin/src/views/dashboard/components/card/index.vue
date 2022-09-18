<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail :tits="tits">
            <template v-slot:tit="obj">
              {{obj.value[0]}}
            </template>
            <template slot="top">
              <Echar/>
            </template>
            <template slot="footer">
              日访问量：888
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail :tits="tits">
            <template v-slot:tit="obj">
              {{obj.value[1]}}
            </template>
            <template slot="top">
              <BarEchar/>
            </template>
            <template slot="footer">
              点击率：35%
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail :tits="tits">
            <template v-slot:tit="obj">
              {{obj.value[2]}}
            </template>
            <!-- <template v-slot:top="obj">
              {{obj}}
            </template> -->
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail :tits="tits">
            <template v-slot:tit="obj">
              {{obj.value[3]}}
            </template>
            <!-- <template v-slot:top="obj">
              {{obj}}
            </template> -->
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from '../detail'
import Echar from '../echar'
import BarEchar from '../barEchar'
export default{
  components: {
    Detail, Echar, BarEchar
  },
  data() {
    return{
      tits:['热门','最新','发展','回顾']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>