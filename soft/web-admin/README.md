vue后台管理系统，github上常见的管理系统修改
# 开始
    npm install
    npm start
    npm run build

# 访问
  [点我访问](https://liuer1211.github.io/soft/soft/web-admin/dist/)

# 登录
    token

# 首页
## 接口
    ip: http://pv.sohu.com/cityjson?ie=utf-8
    地理位置: http://whois.pconline.com.cn/ipJson.jsp?callback=testJson&ip=101.229.48.103
    天气: http://wthrcdn.etouch.cn/weather_mini?city=浦东新区
    nginx 配置跨域
        server {
            listen 5003;
            server_name 106.12.129.114;
            index index.html index.htm index.php;
            root  /www/wwwroot/web-admin;
            
            location /cityjson {
            add_header 'Access-Control-Allow-Origin' '*';
            proxy_pass http://pv.sohu.com;
            }
            
            location ~ /ipJson.jsp/ {
            add_header 'Access-Control-Allow-Origin' '*';
            proxy_pass http://whois.pconline.com.cn;
            }
            
            location /weather_mini {
            add_header 'Access-Control-Allow-Origin' '*';
            proxy_pass http://wthrcdn.etouch.cn;
            }
        }  
    
    webpack 配置跨域
        proxy: {
            "/cityjson": {
                target: "http://pv.sohu.com",
            },
            "/ipJson.jsp": {
                target: "http://whois.pconline.com.cn",
            },
            "/weather_mini": {
                target: "http://wthrcdn.etouch.cn",
            },
        }
# 小说
    列表
    新增

# 人物
    列表
    新增

# 文章
    列表
    新增

    