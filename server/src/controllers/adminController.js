const Admin = require('../models/admin');


exports.findByUserName = function (req, res) {
  Admin.findByUserName(req.params.adminName,req.params.adminPassword, function (err, admin) {
    if (err)
      res.send(err);
    res.json(admin);
  });
};
exports.findAll = function (req, res) {
  Admin.findAll(function (err, admin) {
    if (err)
      res.send(err);
    console.log('res', admin);
    res.send(admin);
  });
};
