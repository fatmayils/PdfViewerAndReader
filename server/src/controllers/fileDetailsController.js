const FileDetail = require("../models/fileDetails");

exports.findAllByFileId=function(req,res){
    FileDetail.findAllByFileId(req.params.fileId, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }
  exports.findAllByLessonName=function(req,res){
    FileDetail.findAllByLessonName(req.params.lessonName, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }
  exports.findAllByProjectTitle=function(req,res){
    FileDetail.findAllByProjectTitle(req.params.projectTitle, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }
  exports.findAllByWriterName=function(req,res){
    FileDetail.findAllByWriterName(req.params.studentName, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }
  exports.findAllByKeywords=function(req,res){
    FileDetail.findAllByKeywords(req.params.keyword, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }
  exports.findAllByPeriod=function(req,res){
    FileDetail.findAllByPeriod(req.params.period, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }
  exports.findAllByWriterByPeriodByLesson=function(req,res){
    FileDetail.findAllByWriterByPeriodByLesson(req.params.period,req.params.lessonName,req.params.studentName, function (err, fileDetail) {
      if (err)
        res.send(err);
      res.json(fileDetail);
    });
  }




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