const FileDetail = require("../models/fileDetailsUser");


  exports.findAllByLessonNameUser=function(req,res){
    FileDetail.findAllByLessonNameUser(req.params.lessonName,req.params.userName, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }
  exports.findAllByProjectTitleUser=function(req,res){
    FileDetail.findAllByProjectTitleUser(req.params.projectTitle,req.params.userName, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }
  exports.findAllByWriterNameUser=function(req,res){
    console.log("controller");
    FileDetail.findAllByWriterNameUser(req.params.studentName,req.params.userName, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }
  exports.findAllByKeywordsUser=function(req,res){
    FileDetail.findAllByKeywordsUser(req.params.keyword, req.params.userName,function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }
  exports.findAllByPeriodUser=function(req,res){
    FileDetail.findAllByPeriodUser(req.params.period,req.params.userName, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }
  exports.findAllByWriterByPeriodByLessonUser=function(req,res){
    FileDetail.findAllByWriterByPeriodByLessonUser(req.params.period,req.params.lessonName,req.params.studentName,req.params.userName, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }