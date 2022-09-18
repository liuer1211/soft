<template>
  <div class="dashboard-container">
    <div class="des-card">
      <Card/>
    </div>
    <!-- <div class="dashboard-text">首页: {{ name }}</div> -->
    <div class="de-main">
      <el-row>
        <!-- 天气 -->
        <el-col :span="24">
          <div class="des-wer-main">
            <!-- 当天天气 -->
            <div class="top">
              <div class="left">
                <div v-if="weather.forecast">{{weather.forecast[0].type}}</div>
              </div>
              <div class="rig" v-if="weather.forecast">
                <div>{{weather.forecast[0].date}}</div>
                <div>{{weather.forecast[0].high}}</div>
                <div>{{weather.forecast[0].low}}</div>
                <div>{{weather.forecast[0].type}}</div>
                <div>{{weather.forecast[0].fengxiang}}</div>
              </div>
            </div>
            <!-- 一周天气 -->
            <div class="cen" v-if="weather.forecast">
              <div class="one">
                <div>{{city}}</div>
              </div>
              <div v-for="(item,index) in weather.forecast" :key="index">
                <div>{{item.date}}</div>
                <div>{{item.high}}</div>
                <div>{{item.low}}</div>
                <div>{{item.type}}</div>
              </div>
            </div>
            <div class="bot">
              * {{weather.ganmao}}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 富文本编辑 -->
    <!-- <Edit/> -->
    <div>
      <el-tiptap
        v-model="content"
        :extensions="extensions"
      ></el-tiptap>
      <el-button @click="getData">获取</el-button>
    </div> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import AMap from "AMap";
import Card from './components/card'

import Edit from '../../components/edit/edit'
import {
	  // 需要的 extensions
	  Doc,
	  Text,
	  Paragraph,
	  Heading,
	  Bold,
	  Underline,
	  Italic,
	  Strike,
	  ListItem,
	  BulletList,
	  OrderedList,
	  Link,
	  Image,
	  Iframe,
	  CodeBlock,
	  Blockquote,
	  TodoItem,
	  TodoList,
	  TextAlign,
	  FontSize,
	  FontType,
	  SelectAll,
	  Fullscreen,
	  Print,
	  Preview,
	  TextHighlight,
	  TextColor,
	  FormatClear,
	  Table,
	  TableHeader,
	  TableCell,
	  TableRow,
	  History,
	  TrailingNode,
	  HardBreak,
	  HorizontalRule,
	  LineHeight,
	  Indent,
	} from "element-tiptap"; 
export default {
  name: 'Dashboard',
  components:{
    Edit, Card
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      citys: {}, // 城市
      weather: {}, // 天气
      city: '', // 城市
      extensions: [
	        new Doc(),
	        new Text(),
	        new Paragraph(),
	        new Heading({ level: 6 }),
	        new Bold({ bubble: true }), // 在气泡菜单中渲染菜单按钮
	        new Underline({ bubble: true, menubar: false }), // 在气泡菜单而不在菜单栏中渲染菜单按钮
	        new Italic(),
	        new Strike(),
	        new ListItem(),
	        new BulletList(),
	        new OrderedList(),
	        new Link(),
	        new Image(
	          // {
	          // 默认会把图片生成 base64 字符串和内容存储在一起，如果需要自定义图片上传
	          // uploadRequest(file) {
	          //   如果接口要求 Content-Type 是 multipart/form-data，则请求体必须使用 FormData
	          //   const fd = new FormData()
	          //   fd.append('image', file)
	          //   第1个 return 是返回 Promise 对象
	          //   为什么？因为 axios 本身就是返回 Promise 对象
	          //   return uploadImage(fd).then(res => {
	          //     // 这个 return 是返回最后的结果
	          //     return res.data.data.url
	          //   })
	          // } // 图片的上传方法，返回一个 Promise<url>
	        // }
	        ),
	        new Iframe(),
	        new CodeBlock(),
	        new Blockquote(),
	        new TodoItem(),
	        new TodoList(),
	        new TextAlign(),
	        new FontSize(),
	        new FontType(),
	        new SelectAll(),
	        new Fullscreen(),
	        new Print(),
	        new Preview(),
	        new TextHighlight(),
	        new TextColor(),
	        new FormatClear(),
	        new Table({ resizable: true }),
	        new TableHeader(),
	        new TableCell(),
	        new TableRow(),
	        new History(),
	        new TrailingNode(),
	        new HardBreak(),
	        new HorizontalRule(),
	        new LineHeight(),
	        new Indent(),
	      ],
	      content: "", 
    }
  },
  created() {
    this.getLocal();
    // this.getInit();
  },
  mounted() {
    // tinymce.init({
    //   selector:"#tt",
    //   language:'zh_CN',
    //   // branding: false,
    //   // toolbar:'',
    //   setup:function(editor){
    //     console.log(editor);
    //     editor.on('click',function(e){
    //       console.log('c:',editor.getContent())
    //     })
    //   },
    //   init_instance_callback:function(editor){
    //     console.log('init:',editor);
    //     editor.setContent('<p>hello</p>')
    //   }
    // })
  },
  methods: {
    getData() {
      console.log(this.content)
    },
    getCon() {
      console.log(tinymce.activeEditor.getContent())
    },
    // 初始天气
    async getInit() {
      // 获得地理位置
      // let ip = await this.getIp();
      // console.log(ip);
      // this.citys = await this.getCity(ip.cip);
      // console.log(this.city);
      // 调接口
      // this.weather = await this.getWeather(this.city);
      // console.log(this.weather);
    },
    // 获取ip
    getIp() {
      return new Promise((resolve,reject)=>{
        axios.get('/cityjson?ie=utf-8').then((response)=>{
          let res = response.data.split('=')[1];
          let re = res.split(';')[0];
          let r = JSON.parse(re)
          resolve(r);
        }).catch((err)=>{
          console.log(err);
          reject(err);
        });
      })
    },
    // 获取位置-城市
    getCity(ip) {
      return new Promise((resolve,reject)=>{
        axios.get(`/ipJson.jsp?callback=testJson&ip=${ip}`).then((response)=>{
          let res = response.data.split('{')[2];
          let re = '{'+res.split('}')[0]+'}';
          let r = JSON.parse(re);
          resolve(r);
        }).catch((err)=>{
          console.log(err);
          reject(err);
        });
      })
    },
    // 获取天气
    getWeather(city) {
      return new Promise((resolve,reject)=>{
        axios.get(`/weather_mini?city=${city}`).then((response)=>{
          let res = response.data.data;
          resolve(res);
        }).catch((err)=>{
          console.log(err);
          reject(err);
        });
      })
    },
    // 获取地理位置
    getLocal() {
      AMap.plugin("AMap.Geolocation", () => {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
        });
        geolocation.getCityInfo(async (status, result) => {   //只能获取当前用户所在城市和城市的经纬度
          if (status == "complete") {
            this.city = result.city;
            // console.log("result",result.city)
            this.weather = await this.getWeather(this.city);
            // console.log("result",result)
          }
        })
        geolocation.getCurrentPosition((status, result) => {  //获取用户当前的精确位置
          if (status == "complete") {
            // console.log("result",result)
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    padding: 18px 0;
    box-sizing: border-box;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.des-wer-main {
  min-width: 494px;
  border: 1px solid #eee;
  .top{
    display: flex;
    padding: 12px;
    box-sizing: border-box;
    .left{
      >div{
        text-align: center;
        width: 150px;
        height: 150px;
        line-height: 150px;
        font-size: 30px;
        font-weight: 600;
        background-color: #21c2ff;
        color: #fff;
        border-radius: 50%;
      }
    }
    .rig{
      padding: 24px 12px 12px 24px;
      box-sizing: border-box;
      >div{
        padding-bottom: 4px;
        box-sizing: border-box;
      }
    }
  }
  .cen{
    margin: 12px 0 0;
    display: flex;
    font-size: 12px;
    >div{
      padding: 0 12px;
      box-sizing: border-box;
    }
    .one{
      padding: 0 12px;
      box-sizing: border-box;
      >div{
        padding: 12px;
        box-sizing: border-box;
        font-size: 16px;
        border: 1px solid #21c2ff;
        border-radius: 4px;
      }
    }
  }
  .bot{
    font-size: 14px;
    margin: 12px 0 0;
    padding: 0 12px 12px;
    box-sizing: border-box;
  }
}
.de-main {
  margin-bottom: 12px;
}
.des-card {
  margin-bottom: 18px;
}
</style>
