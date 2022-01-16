const File = require('../models/files');

exports.create = function (req, res) {
  const new_file = new File(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: 'Please provide all required field'
    });
  } else {
    File.create(new_file, function (err, file) {
      if (err)
        res.send(err);
      res.json({
        error: false,
        message: "File added successfully!",
        data: file
      });
    });
  }
};

exports.findAllByUserName=function(req,res){
  File.findAllByUserName(req.params.userName, function (err, file) {
    if (err)
      res.send(err);
    res.json(file);
  });
}
exports.delete = function (req, res) {
  File.delete(req.params.id, function (err, file) {
    if (err)
      res.send(err);
    res.json({
      error: false,
      message: 'File successfully deleted'
    });
  });
};

exports.findAll = function (req, res) {
  File.findAll(function (err, file) {
    if (err)
      res.send(err);
    console.log('res', file);
    res.send(file);
  });
};
