var express = require('express');
var router = express.Router();

results = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

router.get('/', function(req, res) {
  var requestTerms = req.query.terms;
  if (requestTerms) {
    if (requestTerms.indexOf("<") > -1) {
      requestTerms = 'error';
    }
    requestTerms = decodeURI(requestTerms);
  }

  res.cookie('search_cookie', 'personal_identifier');
  res.render('search', {
    title: 'XSS - Reflected Vulnerability (non-persistent)',
    terms: requestTerms,
    results: results.split(/[,|\.]/)
  });
});

module.exports = router;
