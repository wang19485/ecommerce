const express = require('express');
const router = express.Router();

const auth = require('../controllers/authentication');

router.post('/register', auth.register);
router.get('/google', auth.googleAuth);
router.get('/google/callback', auth.googleAuthCallback);


module.exports = router;
