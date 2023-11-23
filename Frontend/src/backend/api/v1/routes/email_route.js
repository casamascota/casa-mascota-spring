const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email_controller');

router.post('/send', emailController.sendEmail);

module.exports = router;