const express = require('express');
const router = express.Router();
const ScheduleController = require('./ScheduleController');

router.get('/schedule', ScheduleController.index);

module.exports = router;