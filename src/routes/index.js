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

module.exports = router;
