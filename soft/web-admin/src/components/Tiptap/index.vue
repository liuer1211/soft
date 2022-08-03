<template>
  <div>
    <el-tiptap v-model="text" placeholder="请输入" @onUpdate="getData" :extensions="extensions"></el-tiptap>
  </div>
</template>

<script>
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
  props: {
    context: {
      type: String,
      default:''
    }
  },
  computed:{
  },
  data(){
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 6 }),
        // new Bold({ bubble: true }), // 在气泡菜单中渲染菜单按钮
        // new Underline({ bubble: true, menubar: false }), // 在气泡菜单而不在菜单栏中渲染菜单按钮
        // new Italic(),
        // new Strike(),
        // new ListItem(),
        // new BulletList(),
        // new OrderedList(),
        // new Link(),
        // new Image(
        //   // {
        //   // 默认会把图片生成 base64 字符串和内容存储在一起，如果需要自定义图片上传
        //   // uploadRequest(file) {
        //   //   如果接口要求 Content-Type 是 multipart/form-data，则请求体必须使用 FormData
        //   //   const fd = new FormData()
        //   //   fd.append('image', file)
        //   //   第1个 return 是返回 Promise 对象
        //   //   为什么？因为 axios 本身就是返回 Promise 对象
        //   //   return uploadImage(fd).then(res => {
        //   //     // 这个 return 是返回最后的结果
        //   //     return res.data.data.url
        //   //   })
        //   // } // 图片的上传方法，返回一个 Promise<url>
        // // }
        // ),
        // new Iframe(),
        // new CodeBlock(),
        // new Blockquote(),
        // new TodoItem(),
        // new TodoList(),
        // new TextAlign(),
        new FontSize(),
        // new FontType(),
        new SelectAll(),
        new Fullscreen(),
        new Print(),
        // new Preview(),
        // new TextHighlight(),
        // new TextColor(),
        // new FormatClear(),
        // new Table({ resizable: true }),
        // new TableHeader(),
        // new TableCell(),
        // new TableRow(),
        new History(),
        // new TrailingNode(),
        // new HardBreak(),
        // new HorizontalRule(),
        new LineHeight(),
        new Indent(),
      ],
      text: this.context
    }
  },
  methods: {
    getData() {
      // console.log(this.text)
      this.$emit('getData',this.text)
    }
  },
  mounted() {
  },
  beforeDestroy(){
  }, //实例销毁前
  destroyed(){
  }, //实例销毁后
}
</script>
