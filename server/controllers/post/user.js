var Admin = require('../../models/admin');

exports.submit = function(req, res) {
    var name = req.body.name;
    var password = req.body.password;
    Admin.create({ name: name, password: password }, function(error, result) {
        if (error) {
            return res.status(500).send(error)
        } else {
            res.status(200).send(result);

        }
    })
}