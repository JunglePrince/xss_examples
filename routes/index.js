var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.cookie('personal_cookie', 'secret_stuff');
  res.render('index', { title: 'XSS - Cross Site Scripting Vulnerabilities' });
});

module.exports = router;
