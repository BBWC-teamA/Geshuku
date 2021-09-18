var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('clubs', { title: 'サークル一覧' });
});

module.exports = router;
