var express = require('express');
var router = express.Router();
const { Op } = require("sequelize");
const db = require('../models');

const sendNum = 6;
const eventNum = 5;

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
      db.Event.findAll({
        limit: eventNum,
        order: [['date', 'ASC']]
      }).then(events => {
        // events.map(event => {console.log(event.date)});
        res.render('index', { title: 'メイン', clubs: clubs, events});
      })
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
            db.Event.findAll({
              limit: eventNum,
              order: [['date', 'ASC']]
            }).then(events => {
              // events.map(event => {console.log(event.date)});
              res.render('index', { title: 'メイン', clubs: clubs, events});
            })
          })
        })
      });
    } else {
      res.redirect('/');
    }
  })
});

module.exports = router;
