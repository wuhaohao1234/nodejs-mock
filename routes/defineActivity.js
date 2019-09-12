var express = require('express');
var router = express.Router();


router.post('/defineActivity', function(req, res, next) {
  // 获取参数
  var query = req.body;
  console.log("post请求：参数", query);

  res.send('hello , world');
});