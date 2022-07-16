<template>
  <div class="tinymce-editor">
    <editor :id="tinymceId" v-model.trim="myValue" :init="init" v-bind="$attrs" v-on="inputListeners">
    </editor>
  </div>
</template>
<script>
// 文档 http://tinymce.ax-z.cn/
// 引入组件
import tinymce from 'tinymce/tinymce' // tinymce默认hidden，不引入不显示
import Editor from '@tinymce/tinymce-vue'
// 引入富文本编辑器主题的js和css
import 'tinymce/skins/content/default/content.min.css'
import 'tinymce/themes/silver'
import 'tinymce/icons/default/icons.min.js' // 解决了icons.js 报错Unexpected token '<'
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import 'tinymce/plugins/image' // 插入上传图片插件
import 'tinymce/plugins/media' // 插入视频插件
import 'tinymce/plugins/table' // 插入表格插件
import 'tinymce/plugins/lists' // 列表插件
import 'tinymce/plugins/wordcount' // 字数统计插件
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/help'
export default {
  // inheritAttrs: false,
  components: {
    Editor,
  },
  name: 'Tinymce',
  props: {
    id: {
      type: String,
      default: function () {
        return new Date().getTime() + ''
      },
    },
    value: {
      type: String,
      default: '',
    },
    height: {
      type: Number,
      default: 300,
    },
    plugins: {
      type: [String, Array],
      default: 'link lists image code table wordcount media preview fullscreen help',
    },
    toolbar: {
      type: [String, Array],
      default:
        'bold italic underline strikethrough | fontsizeselect | formatselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent blockquote | undo redo | link unlink code lists table image media | removeformat | fullscreen preview',
    },
  },
  data() {
    const that = this
    return {
      // 自动生成的id
      tinymceId: this.id,
      init: {
        selector: `#${this.tinymceId}`,
        language_url: '/tinymce/langs/zh_CN.js', // 语言包的路径
        language: 'zh_CN', //语言
        skin_url: '/tinymce/skins/ui/oxide', // skin路径
        height: this.height, //编辑器高度
        branding: false, //是否禁用“Powered by TinyMCE”
        menubar: false, //顶部菜单栏显示
        statusbar: false, //是否显示底部的状态栏
        plugins: this.plugins,
        toolbar: this.toolbar, // （自定义工具栏）
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
        },
        setup: (editor) => {
          // 初次化编辑器
          editor.on('init', () => {
            that.isInit = true //告知是初始化\
            if (that.value) {
              editor.setContent(that.value)
              that.isInit = false
            }
            editor.on('input change undo redo', () => {
              // this.value = editor.getContent()
              //此处设置为false很好解决光标前置问题
              that.isInit = false
            })
          })
        },
      },
      myValue: this.value,
      isInit: false, //是否初始化
    }
  },
  computed: {
    inputListeners() {
      const newListeners = {
        ...this.$listeners,
        input: (event) => {
          this.$emit('input', event)
        },
      }
      return newListeners
    },
  },
  mounted() {
    tinymce.init({})
  },
  beforeDestroy: function () {
    tinymce.remove(this.tinymceId)
  },
  methods: {
    /**
     * 获取富文本text类型内容
     */
    getTextContent(){
      const editor = tinymce.get(this.tinymceId)
      return editor.getContent({'format' : 'text'})
    }
  },
  watch: {
    value(val) {
      //用户vue绑定回显
      if (this.isInit) {
        this.isInit = false
        this.$nextTick(() => {
          const editor = tinymce.get(this.tinymceId)
          editor.setContent(val) 
        })
      }
    },
  },
}
</script>