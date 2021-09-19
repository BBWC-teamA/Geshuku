var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/:id', async function(req, res, next) {
  // console.log(req.params.id);
  const club = await db.Club.findByPk(req.params.id);
  res.render('detail', { title: 'サークル詳細', club:club});
});

module.exports = router;
