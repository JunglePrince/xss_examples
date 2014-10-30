var express = require('express');
var router = express.Router();
var fs = require('fs');

var title = 'XSS Persistent Vulnerability';
var commentFile = 'data/comments.txt';

router.get('/', function(req, res) {
  res.cookie('forum_cookie', 'personal_secrets');

  // read from the text file
  var comments = fs.readFileSync(commentFile).toString().split('\n');
  // trim off last newline
  comments.pop();

  res.render('forum', {
    title: title,
    comments: comments
  });
});

router.post('/', function(req, res) {
  fs.appendFile(commentFile, req.body.comment + '\n', function (err) {
    res.status(200).redirect('/forum');
  });
});

module.exports = router;
