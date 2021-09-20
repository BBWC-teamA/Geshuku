var express = require('express');
var router = express.Router();
const db = require('../models');
const { Op } = require("sequelize");

/* GET home page. */
router.post('/', function(req, res, next) {
  db.Student.findOne({
    where: {contact: req.body.contact}
  }).then(student => {
    db.Friend.findAll({
      where: {
        [Op.or]: {
          studentid1: student.id,
          studentid2: student.id
        }
      }
    }).then(friendpairs => {
      var friendids = []
      friendpairs.map(friendpair => {
        if (friendpair.studentid1 == student.id) {
          friendids.push(friendpair.studentid2);
        } else {
          friendids.push(friendpair.studentid1);
        }
      });
      console.log(friendids);
      db.Student.findAll({
        where: {
          id: {
            [Op.in]: friendids
          }
        }
      }).then(students => {
        // students.map(student => {console.log(student.name)});
        res.render('friends', { title: 'フレンド一覧', friends:students });
      })
    }); 
  });
});

module.exports = router;
