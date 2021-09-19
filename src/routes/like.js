var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.post('/', function(req, res, next) {
    db.Student.findOne({
        attributes: ['id'],
        where: {contact: req.body.contact}
    }).then(studentId => {
        db.StudentClub.count({
            where: {id:studentId.id}
        }).then(dataCount => {
            if (dataCount > 0) {
                db.StudentClub.destroy({where: {studentid:studentId.id}});
            } else {
                db.StudentClub.create({studentid:studentId.id, clubid:req.body.clubid});
            }
        });
    });
});
            
module.exports = router;
