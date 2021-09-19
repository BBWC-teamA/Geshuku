const e = require('express');
var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/:email', function(req, res, next) {
  db.Student.findOne({
    where: {contact:req.params.email}
  }).then(student => {
    if (student) {
      db.StudentTag.findAll({
        attributes: ['tag'],
        where: {studentid: student.id}
      }).then(tags => {
        var tagArray = [];
        tags.map(tag => {tagArray.push(tag.tag)});
        console.log(tagArray);
        res.render('mypage', { title: 'マイページ', student:student, tags:tagArray });
      });
    } else {
      const student = {
        name:"下宿 太郎",
        department: "工学部",
        contact:req.params.email
      }
      res.render('mypage', { title: 'マイページ', student:student, tags:[] })
    }
  });
});

module.exports = router;
