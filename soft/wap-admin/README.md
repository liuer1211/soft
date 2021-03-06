## 介绍
    react 管理台项目

# 访问
    manifest.json 中配置 "start_url": "./index.html"
    package.json 中配置 "homepage": "./" 
    在github中设置访问地址，然后即可访问
   [点我访问](https://liuer1211.github.io/admin-client_blank/build)
    

## 基本操作
    yarn install
    yarn start
    yarn build
    http://localhost:3000
    
    后端项目
        进入/server目录下
        npm i
        npm start

## 依赖添加
    1. 基本-脚手架初始
        "react": "^16.8.6",
        "react-dom": "^16.8.6",
        "react-scripts": "3.0.1"
    2. antd 相关
        2.1 UI
            yarn add antd
        2.2 按需打包
            yarn add react-app-rewired customize-cra babel-plugin-import
        2.3 创建：  config-overrides.js
            加入：  const {override, fixBabelImports} = require('customize-cra');
                    module.exports = override(
                        fixBabelImports('import', {
                            libraryName: 'antd',
                            libraryDirectory: 'es',
                            style: 'css',
                        }),
                    );
            修改配置: package.json
                "scripts": {
                    "start": "react-app-rewired start",
                    "build": "react-app-rewired build",
                    "test": "react-app-rewired test",
                    "eject": "react-scripts eject"
                },
        2.4 自定义 antd 主题
                yarn add less less-loade
            修改 config-overrides.js
                module.exports = override(
                    // 针对antd实现按需打包，根据import来打包（使用babel-plugin-import）
                    fixBabelImports('import', {
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                        style: true, // 自动打包相关的样式
                    }),
                    // 使用less-loader对源码中的less的变量进行重新指定
                    addLessLoader({
                        javascriptEnabled: true,
                        modifyVars: {'@primary-color': '#1DA57A'},
                    }),
                );
    3. 路由
        下载路由包: yarn add react-router-dom

    4. axios
        下载：npm install axios
        封装axios,后台交互

    5. 跨域 (fetch,xml)
        代理配置："proxy": "http://localhost:5000"
    
    6. 缓存store
        下载：npm install store

# 页面
    1. login 登录
        引入antd
        表单验证: antd自带控件
        高阶函数
        高阶组件

    2. admin 首页后台
        layout 布局
            菜单栏：
                菜单Ui使用
                多个路由菜单，动态生成: 循环渲染
                非路由组件，变成一个路由组件：withRouter
                根据menu的数据数组生成对应的标签数组：reduce + 递归调用
                componentWillMount():
                    在第一次render()之前执行一次
            头部:
                天气预报：百度-自行申请key
                下载：yarn add json; 跨域
                时间：定时器
                componentDidMount():
                    第一次render（）后执行一次
                    一般再次执行异步操作：发Ajax请求、启动定时器
                componentWillUnmount()：
                    当前组件卸载前执行，清除定时器
                title: 遍历
                定义函数型组件
            内容: 
                多个路由菜单，指向对应页面
    3. category 商品
        UI 组件：Card Table
        接口定义：查询 添加 更新
        setState:
            // 更新状态，此方法为异步
            this.setState({
                parentId: category._id,
                parentName: category.name,
            },()=>{
                // 在状态更新且重新render()后执行
                // 二级分类列表
                this.getDate();
            })
        onClick:
        {/* 
            这种方式，进来会立即执行
            <LinkButton onClick={this.getSubCate(category)}>查看子分类</LinkButton> 
            这种写，进来不调，点击时候调，但不能传参数
            <LinkButton onClick={this.getSubCate}>查看子分类</LinkButton> 
            如何将事件回调函数，传递参数：先定义匿名函数，再函数调用处理的函数并传入数据
        */}
        <LinkButton onClick={()=>this.getSubCate(category)}>查看子分类</LinkButton>
        修改：
            Modal
            组件传值:
                父：
                <UpdateForm 
                    categoryName={name}
                    setForm ={(form)=>{this.form = form}}
                /> 
                子：
                static propTypes = {
                    categoryName: PropTypes.string.isRequired,
                    setForm: PropTypes.func.isRequired
                }      
                this.props.setForm(this.props.form) 
                子组件不能直接改变父组件的状态
                状态在那个组件，更新状态的行为就应该定义在那个组件
                解决：父组件定义函数，传递给子组件，子组件调用
        添加：
            子组件：显示下拉列
                   下拉默认一级分类id=0，列表展示一级分类下商品id
            在二级分类添加其他级别数据 - 更新数据情况 - 查询整个数据情况
            表单校验

    4. product 
        路由完全匹配： exact
        ant组件，title中的render渲染列表
                分页显示-动态传值
        详情：   dangerouslySetInnerHTML 类似于 v-html
                路由传值：this.props.history.push('/product/detail', {product})
                Promise.all 一次性发送多个请求, 只有都成功了, 才正常处理
                子路由侧边栏不打开，不选中 - 修复

    76 67