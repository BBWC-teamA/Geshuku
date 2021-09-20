var express = require('express');
var router = express.Router();
const { Op } = require("sequelize");
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

        db.StudentEvent.findAll({
          where: {studentid:student.id}
        }).then(studentevents => {
          eventIds = []
          studentevents.map(studentevent => {eventIds.push(studentevent.eventid)});
          db.Event.findAll({
            where: {
              id: {
                [Op.in]: eventIds
              }
            }
          }).then(events => {
            // events.map(event => {console.log(event.name)});
            res.render('mypage', { title: 'マイページ', student:student, tags:tagArray, events:events });
          })
        })
        
      });
    } else {
      const student = {
        name:"下宿 太郎",
        department: "工学部",
        contact:req.params.email
      }
      res.render('mypage', { title: 'マイページ', student:student, tags:[], events:[] })
    }
  });
});

module.exports = router;
