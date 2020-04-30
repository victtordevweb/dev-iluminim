
class AdminController {
    index(req, res){
        res.send({isAdmin: true});
    }
}

module.exports = new AdminController();