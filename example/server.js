//main.js
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extende: true }));
app.use(bodyparser.json())

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')  //直接读取本地路径的文件  
})
app.post('/postData', function (req, res) {  //这里参数加上刚刚的解析的而且这里不是get了
    var result = req.body
    res.send('成功');
})
app.get('/getData', function (req, res) {
    var result = req.query; //这个是前台穿过来的表单数据
    // Do something
    console.log(result)
    res.send(result)
})
app.listen(5000)