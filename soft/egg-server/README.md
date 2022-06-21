# 开始
    npm i egg-init -g
    npm init egg --type=simple
    npm i
    npm run dev

# MVC

# 连接数据库mysql
    npm install egg-mysql
    配置 config/plugin.js
        mysql: {
            enable: true,
            package: 'egg-mysql'
        }
    配置 config/config.default.js
        config.mysql = {
            // 单数据库信息配置
            client: {
            // host
            host: 'localhost',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: 'root', // 初始化密码，没设置的可以不写
            // 数据库名
            database: 'novel', // 新建的数据库名称
            },
            // 是否加载到 app 上，默认开启
            app: true,
            // 是否加载到 agent 上，默认关闭
            agent: false,
        };
    CRUD 
        class HomeService extends Service {
            async index() {
                // return {ok:1}
                const { ctx, app } = this;
                const QUERY_STR = 'id, name';
                // 获取 id 的 sql 语句
                let sql = `select ${QUERY_STR} from novel`;
                try {
                    // mysql 实例已经挂载到 app 对象下，可以通过 app.mysql 获取到。
                    const result = await app.mysql.query(sql);
                    // console.log('res=',result)
                    return result;
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }
        }
        --
        class HomeController extends Controller {
            async index() {
                const { ctx, service } = this;
                let res = await service.home.index();
                // console.log(res);
                ctx.body = res;
            }
        }
        --
        { id: '1', name: '夜灵犀传奇' }
        ---------------------------------

# 路由
    