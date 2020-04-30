const express = require('express');
const router = express.Router();
const AdminController = require('./AdminController');

router.get('/admin', AdminController.index);

module.exports = router;