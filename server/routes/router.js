const express = require('express');
const router = express.Router();

const trending = require('../controllers/trending');

router.get('/trending', trending.homeTrending);

module.exports = router;
