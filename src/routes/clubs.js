var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const clubs = await db.Club.findAll();
  clubs.map((club) => {console.log(club.name)});
  res.render('clubs', { title: 'サークル一覧', clubs:clubs });
});

module.exports = router;
