var dbConn = require("../../connection").db;
//User object create
var User = function (user) {
  this.userName = user.userName;
  this.userPassword = user.userPassword;
  this.firstAndLastName = user.firstAndLastName;
};

User.create = function (newUser, result) {
  dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.id);
      result(null, res.id);
    }
  });
};

User.findByUserName = function (userName, result) {
  dbConn.query(
    "Select * from users where userName = ? ",
    userName,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

User.findByUserNameAndPassword = function (userName, userPassword, result) {
  dbConn.query(
    "SELECT firstAndLastName FROM users WHERE userName='" +
      userName +
      "' AND userPassword='" +
      userPassword +
      "'",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

User.findAll = function (result) {
  dbConn.query("Select * from users", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("cargos : ", res);
      result(null, res);
    }
  });
};

User.update = function (id, user, result) {
  console.log("update çağrıldı");
  dbConn.query(
    "UPDATE users SET  firstAndLastName='" +
      user.firstAndLastName +
      "' ,userPassword='" +
      user.userPassword +
      "', userName='" +
      user.userName +
      "' WHERE id ='" +
      id +
      "'",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

User.delete = function (id, result) {
  dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = User;
