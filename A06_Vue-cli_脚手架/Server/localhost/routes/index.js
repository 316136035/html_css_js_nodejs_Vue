var express = require('express');//引入express服务器框架
var router = express.Router();//引入路由模块

// get路由规则
router.get('/', function (request, res, next) {
  //express模块方法获取请求报文参数
  console.log('url路径:', request.path)//get2
  console.log('url参数:', request.query)// { key2: 'value2' }
  console.log('客户端IP:', request.ip)//127.0.0.1
  console.log('user-agent:', request.get('user-agent'))// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
  console.log('Host:', request.get('Host'))
  console.log("Origin", request.get('Origin'));
  console.log("Referer", request.get('Referer'));

  res.render('index', {
    title: 'localhost',
    path: request.path,
    query: request.query,
    ip: request.ip,
    user_agent: request.get('user-agent'),
    Host: request.get('Host'),
    Origin: request.get('Origin'),
    Referer: request.get('Referer'),
  });

});

module.exports = router;
