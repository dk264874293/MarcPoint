/*
    应用程序启动入口文件
*/
/*
    应用express模块
*/
var express = require('express');

//加载模板处理模块
var swig = require('swig');

/*
    创建APP应用 => NodeJs http.creatreServer()
*/
var app = express();

//设置静态文件托管
app.use('/public',express.static( __dirname + '/public') );

//配置应用模板,定义当前应用所使用的模板引擎
app.engine('html',swig.renderFile);
//设置模板文件存放的目录，第一参数必须是views
app.set('views','./views');
//注册所使用的模板引擎，第一参数不可变
app.set('view engine','html');

//开发模式取消缓存，生产环境必须取消
swig.setDefaults({
    cache:false
});

//根据不同功能划分模块
// app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'));

//监听请求
app.listen(8081);
