const express = require('express');
const router = express.Router();

router.get('/schedule', (req, res)=>{
    res.render('week', {className: 'schedule'});
});

router.get('/', (req, res)=>{
    res.render('index', {className: 'home'});
});

module.exports = router;