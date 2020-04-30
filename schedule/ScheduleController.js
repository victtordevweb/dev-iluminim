class ScheduleController {
    index(req, res){
        res.render('schedule', {className: 'schedule'});
    }
}

module.exports = new ScheduleController();