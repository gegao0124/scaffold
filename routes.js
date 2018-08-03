var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    //res.render for template engines
    
    res.sendFile(__dirname + '/views/index.html');
});

module.exports = router;