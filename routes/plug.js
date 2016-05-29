var express = require('express');
var router = express.Router();
var agent = require("../agent");

router.get('/up/on', function(req, res, next) {
    agent.send('5505020000F040');
    res.send('/up/on');
});

router.get('/up/off', function(req, res, next) {
    agent.send('55050200000040');
    res.send('/up/off');
});

router.get('/down/on', function(req, res, next) {
    agent.send('55050200000020');
    res.send('/down/on');
});

router.get('/down/off', function(req, res, next) {
    agent.send('5505020000F020');
    res.send('/down/off');
});

module.exports = router;
