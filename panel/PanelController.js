const express = require('express');
const router = express.Router();

router.get('/schedule', (req, res)=>{
    res.render('schedule', {className: 'schedule'});
});


module.exports = router;