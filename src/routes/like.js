const e = require('express');
var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.post('/', function(req, res, next) {
    db.Student.findOne({
        attributes: ['id'],
        where: {contact: req.body.contact}
    }).then(studentId => {
        if (studentId == null) {
            db.Student.create({
                contact: req.body.contact
            }).then(student => {
                db.StudentClub.create({studentid:student.id, clubid:req.body.clubid});
            });
        } else {
            db.StudentClub.count({
                where: {studentid:studentId.id, clubid:req.body.clubid}
            }).then(dataCount => {
                if (dataCount > 0) {
                    db.StudentClub.destroy({where: {studentid:studentId.id, clubid:req.body.clubid}});
                } else {
                    db.StudentClub.create({studentid:studentId.id, clubid:req.body.clubid});
                }
            });
        }
        
    });
    res.redirect('/detail/' + req.body.clubid);
});
            
module.exports = router;
