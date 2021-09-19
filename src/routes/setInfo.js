var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.post('/', function(req, res, next) {
    var tags = req.body.tags;
    var tagArray = tags.split(',');
    var tagDataArray = []
    db.Student.count({
        where: {contact: req.body.contact}
    }).then(dataCount => {
        if (dataCount > 0) {
            db.Student.findOne({
                attributes: ['id'],
                where: {contact: req.body.contact}
            }).then(studentId => {
                db.Student.Update(
                    {name: req.body.name,department: req.body.department,contact: req.body.contact},
                    {where : {id: studentId.id}}
                )
                console.log(studentId.id);
                tagArray.forEach(tag => {
                    tagDataArray.push({sutudentid:studentId.id, tag:tag});
                });
                db.StudentTag.destroy({
                    where: {
                        id: studentId
                    }
                }).then(() => {
                    db.StudentTag.bulkCreate(tagDataArray);
                    res.render('mypage', { title: 'マイページ' });
                });
            });
        } else {
            db.Student.create({
                name: req.body.name,
                department: req.body.department,
                contact: req.body.contact
            });
            db.Student.findOne({
                attributes: ['id'],
                where: {contact: req.body.contact}
            }).then(studentId => {
                tagArray.forEach(tag => {
                    tagDataArray.push({sutudentid:studentId.id, tag:tag});
                });
                db.StudentTag.bulkCreate(tagDataArray);
                res.render('mypage', { title: 'マイページ' });
            });
        }
    });
    
    

});

module.exports = router;
