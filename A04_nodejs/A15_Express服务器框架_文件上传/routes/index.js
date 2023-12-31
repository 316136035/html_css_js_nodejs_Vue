var express = require('express');//引入express模块 服务器框架
var router = express.Router();//获取路由对象
var formidable = require('formidable');//引入formidable模块 解释请求体 输入框信息和文件信息
 /* get 主页  文件上传页面*/
router.get('/', function(req, res, next) {
  res.render('index', { title:'头标题' });
});
/* post 主页  文件上传页面*/
router.post('/upload/file', (req, res, next) => {
  // 解析请求体
  const form = formidable({
    multiples:true,//支持上传多个文件
    uploadDir:__dirname+'/../public/images',//保存路径
    keepExtensions:true,//保留后缀
  });
  // 监听请求体事件
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields, files);// 打印请求体 信息（fields 存放/text/password/textarea/select/ radio/checkbox/select，
    console.log(files);//files文件信息 
  });
  // 响应
   res.send('ok');
  });
// 暴露路由
module.exports = router;
