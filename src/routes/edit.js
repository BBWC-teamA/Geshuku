var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.ClubTag.findAll({
    attributes: ['tag'],
  }).then(tags => {
    var tagArray = []
    tags.map((tag) => {
      if (tagArray.indexOf(tag.tag) < 0) {
        tagArray.push(tag.tag);
      }
    });
    console.log(tagArray);
      res.render('edit', { title: '編集ページ', tags:tagArray});
  });
});

module.exports = router;
