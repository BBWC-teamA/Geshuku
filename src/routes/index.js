var express = require('express');
var router = express.Router();
const { Op } = require("sequelize");
const db = require('../models');

const sendNum = 6;

const createRandomArray = (n) => {
  var array = [];
  while (array.length < sendNum) {
    var i = Math.floor( Math.random() * n) + 1;
    if (array.indexOf(i) < 0) {
      array.push(i);
    }
  }
  return array;
}

router.get('/', async function(req, res, next) {
  db.Club.count().then(dataCount => {
    var idArr = createRandomArray(dataCount);
    console.log(idArr);
    db.Club.findAll({
      where: {
        id: {
          [Op.in]: idArr
        }
      }
    }).then(clubs => {
      res.render('index', { title: 'メイン', clubs: clubs});
    })
  });
});

router.post('/', async function(req, res, next) {
  db.Student.findOne({
    where: {contact:req.body.contact}
  }).then(student => {
    if (student) {
      db.StudentTag.findAll({
        attributes: ['tag'],
        where: {studentid: student.id}
      }).then(tags => {
        var tagArray = [];
        tags.map(tag => {tagArray.push(tag.tag)});
        console.log(tagArray);
        db.ClubTag.findAll({
          where: {
            tag: {
              [Op.in]: tagArray
            }
          }
        }).then(clubTags => {
          var clubidArray = [];
          clubTags.map(clubTag => {if (clubidArray.indexOf(clubTag.clubid) < 0) {clubidArray.push(clubTag.id)}})
          db.Club.findAll({
            where: {
              id: {
                [Op.in]: clubidArray
              }
            }
          }).then(clubs => {
            res.render('index', { title: 'メイン', clubs: clubs});
          })
        })
      });
    } else {
      res.redirect('/');
    }
  })
});

module.exports = router;
