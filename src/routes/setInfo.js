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
                db.Student.update(
                    {name: req.body.name,department: req.body.department,contact: req.body.contact},
                    {where : {id: studentId.id}}
                )
                console.log(studentId.id);
                tagArray.forEach(tag => {
                    tagDataArray.push({studentid:studentId.id, tag:tag});
                });
                db.StudentTag.destroy({
                    where: {
                        studentid: studentId.id
                    }
                }).then(() => {
                    db.StudentTag.bulkCreate(tagDataArray);
                    res.render('mypage', { title: 'マイページ' });
                });
            });
        } else {
            console.log(req.body);
            db.Student.create({
                name: req.body.name,
                department: req.body.department,
                contact: req.body.contact
            }).then(student => {
                tagArray.forEach(tag => {
                    tagDataArray.push({studentid:student.id, tag:tag});
                });
                db.StudentTag.bulkCreate(tagDataArray);
                res.redirect('/mypage/' + String(req.body.contact));
            });
        }
    });
    
    

});

module.exports = router;
