const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

//APIs
router.use('/api', apiRouter);

//Views (Public)
router.use(express.static(__dirname + '/public'))

module.exports = router;