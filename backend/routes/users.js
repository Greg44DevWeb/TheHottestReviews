const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const password = require('../middleware/password');


router.post('/signup', password, userController.signup);
router.post('/login', userController.login);

module.exports = router;