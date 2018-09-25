const express = require('express');
const router = express.Router();
const register = require('../controller/register')
const login = require('../controller/login')

router.post('/register', register.create);
router.post('/login', login.create);

module.exports = router;
