var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('students', { title: '新入生一覧' });
});

module.exports = router;
