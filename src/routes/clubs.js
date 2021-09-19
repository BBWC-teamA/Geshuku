var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const clubs = await db.Club.findAll();
  // clubs.map((club) => {console.log(club.name)});
  db.ClubTag.findAll({
    attributes: ['tag'],
  }).then(tags => {
    var tagArray = []
    tags.map((tag) => {
      if (tagArray.indexOf(tag.tag) < 0) {
        tagArray.push(tag.tag);
      }
    });
    res.render('clubs', { title: 'サークル一覧', clubs:clubs, tags:tagArray});
  });
});

module.exports = router;
