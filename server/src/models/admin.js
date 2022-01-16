var dbConn = require('../../connection').db;
//User object create
var Admin = function (admin) {

  this.adminName = admin.adminName;
  this.adminPassword = admin.adminPassword;

};


Admin.findByUserName = function (adminName,adminPassword, result) {
  dbConn.query("Select * from admin where adminName ='"+ adminName+"' And adminPassword='"+adminPassword+"'", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Admin.findAll = function (result) {
  dbConn.query("Select * from admin", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log('cargos : ', res);
      result(null, res);
    }
  });
};


module.exports = Admin;