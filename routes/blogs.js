const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  // res.send('555555555555555555');
  res.render('blogs/index', {author:'Po Chaiyapon'});
})

module.exports = router;