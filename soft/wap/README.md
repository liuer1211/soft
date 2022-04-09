# 开始
    vue create wap
    npm install
    npm start
    npm run build

# 配置 package.json
    快捷启动 npm start 
        "start": "npm run serve",
    启动打开页面 
        "serve": "vue-cli-service serve --open" 
    本地启动为开发环境
        development
    生产环境 新建 .env.production文件
        默认打包生产环境 production
    测试环境 新建 .env.test文件
        设置 test
        "test": "vue-cli-service build --mode test",

# 创建并配置 vue.config.js
    静态文件入口
    跨域
    打包文件目录

# 下载依赖
    npm install --save vue-router@3
    npm install --save vuex@3.6.2
    npm install --save axios
    npm install mockjs
    npm install --save vant@2.5.2
    npm install --save less less-loader@5
    npm install vue-lazyload -S
    npm install --save nprogress
    npm install vue-infinite-scroll
    npm install amfe-flexible --save
    npm i postcss-pxtorem@5.1.1  --save

# 整体配置
    reset.css
    0.3秒延迟
    vw + rem
      100vw = 一个完美视口
      ui图 750px
      1px = 0.13333vw
      移动端最小像素12px
      40px   --  1rem
      1.3333vw * 40  = 5.3333vw
      设计图宽度 / 5.3333vw = css宽度
    适配插件
        css: {
            loaderOptions: {
            postcss: {
                plugins: [
                require('postcss-pxtorem')({
                    rootValue: 37.5,
                    propList: ['*']
                })
                ]
            }
            }
        },
    路径简写配置： "@/*": ["src/*"]


# 路由
    实例化路由
    交由vue管理
    展示初始页面

# 首页
    搜索框
      输入即搜索 节流
    展示内容
      触底加载
