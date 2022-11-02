var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('handwash', { title: 'Search results Handwash' });
});

module.exports = router;
