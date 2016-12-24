var express = require('express');
var router = express.Router();
var agent = require("../agent");

router.get('/up/on', function(req, res, next) {
    agent.send('5505020000F040');
    res.send('/up/on');
});

router.post('/up/on', function(req, res, next) {
    agent.send('5505020000F040');
    res.send('{"result": "ok"}');
})

router.get('/up/off', function(req, res, next) {
    agent.send('55050200000040');
    res.send('/up/off');
});

router.post('/up/off', function(req, res, next) {
    agent.send('55050200000040');
    res.send('{"result": "ok"}');
})

router.get('/down/on', function(req, res, next) {
    agent.send('55050200000020');
    res.send('/down/on');
});

router.post('/down/on', function(req, res, next) {
    agent.send('55050200000020');
    res.send('{"result": "ok"}');
})

router.get('/down/off', function(req, res, next) {
    agent.send('5505020000F020');
    res.send('/down/off');
});

router.post('/down/off', function(req, res, next) {
    agent.send('5505020000F020');
    res.send('{"result": "ok"}');
})

router.get('/wake/box', function(req, res, next) {
    agent.wake('00:30:18:02:fc:bf');
    res.send('/wake/box');
});

router.post('/wakeup/box', function(req, res, next) {
    agent.wake('00:30:18:02:fc:bf');
    res.send('{"result": "ok"}');
})

router.post('/shutdown/box', function(req, res, next) {
    res.send('{"result": "not implemented"}');
})

module.exports = router;
