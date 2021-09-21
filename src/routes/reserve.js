var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.post('/', function(req, res, next) {
    db.Student.findOne({
        where: {contact: req.body.contact}
    }).then(student => {
        if(student) {
            db.StudentEvent.count({
                where: {studentid:student.id, eventid:req.body.eventid}
            }).then(dataCount => {
                if(dataCount == 0) {
                    db.StudentEvent.create({studentid:student.id, eventid:req.body.eventid});
                }
            });
        } else {
            db.Student.create({
                contact: req.body.contact
            }).then(student => {
                db.StudentEvent.create({studentid:student.id, eventid:req.body.eventid});
            });
        }
    })
    
    res.redirect('/detail/' + String(req.body.clubid));
});

module.exports = router;
