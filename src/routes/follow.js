var express = require('express');
var router = express.Router();
const db = require('../models');
const { Op } = require("sequelize");

/* GET home page. */
router.post('/', function(req, res, next) {
    db.Student.findOne({
        where: {contact: req.body.contact}
    }).then(student => {
        if(student) {
            db.Friend.count({
                where: {
                    [Op.and]: {
                        studentid1: { [Op.in]: [student.id, req.body.studentid] },
                        studentid2: { [Op.in]: [student.id, req.body.studentid] }
                    }
                }
            }).then(dataCount => {
                console.log(dataCount);
                if(dataCount == 0) {
                    db.Friend.create({studentid1:student.id, studentid2:req.body.studentid});
                }
            });
        } else {
            db.Student.create({
                contact: req.body.contact
            }).then(student => {
                db.StudentEvent.create({studentid1:student.id, studentid2:req.body.studentid});
            });
        }
    })
    
    res.redirect('/students/' + String(req.body.clubid));
});

module.exports = router;
