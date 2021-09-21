var express = require('express');
var router = express.Router();
const db = require('../models');
const { Op } = require("sequelize");

/* GET home page. */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  db.StudentClub.findAll({
    attributes: ['studentid'],
    where: {clubid:req.params.id}
  }).then(students=> {
    // console.log(students);
    idArr = []
    students.map(student => {idArr.push(student.studentid)});
    db.Student.findAll({
      where: {
        id: {
          [Op.in]: idArr
        }
      }
    }).then(students =>  {
      res.render('students', { title: '新入生一覧', clubid:req.params.id, students:students});
    })
  })
});

module.exports = router;
