var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/:id', async function(req, res, next) {
  // console.log(req.params.id);
  const club = await db.Club.findByPk(req.params.id);
  db.Event.findAll({
    where: {
      clubid:req.params.id
    }
  }).then(events =>{
    // events.map((event) => {console.log(event.name)});
    db.ClubTag.findAll({
      attributes: ['tag'],
      where: {
        clubid:req.params.id
      } 
    }).then(tags => {
      // tags.map((tag) => {console.log(tag.tag)});
      res.render('detail', { title: 'サークル詳細', club:club, events:events, tags:tags});
    });
  });
});

module.exports = router;
