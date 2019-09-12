var express = require('express');
var Mock = require('mockjs')
var router = express.Router();

var data = Mock.mock({
  'list:1-10': [{
    'id:+1': 1
  }]
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
