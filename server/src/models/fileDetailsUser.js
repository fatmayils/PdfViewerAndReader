var dbConn = require("../../connection").db;
//User object create
var FileDetailUser = function (fileDetail) {
    this.lessonName=fileDetail.lessonName;
    this.projectTitle=fileDetail.projectTitle
    this.studentNameAndNumbersAndTypeOfTeaching=fileDetail.studentNameAndNumbersAndTypeOfTeaching;
    this.projectSummary=fileDetail.projectSummary;
    this.deliveryPeriod=fileDetail.deliveryPeriod;
    this.keywords=fileDetail.keywords;
    this.consultantInformation=fileDetail.consultantInformation;
    this. juryInformation=fileDetail.juryInformation;
    this. fileId=fileDetail.fileId;
    this.userName=fileDetail.userName;
}

  FileDetailUser.findAllByWriterNameUser = function (studentName,userName, result) {
    dbConn.query(
      "Select * from file_details where studentNameAndNumbersAndTypeOfTeaching LIKE '%" + studentName + "%' AND  userName='"+userName+"'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };

  FileDetailUser.findAllByLessonNameUser = function (lessonName,userName, result) {
    dbConn.query(
      "Select * from file_details where lessonName ='" + lessonName + "'AND  userName='"+userName+"'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };

  FileDetailUser.findAllByProjectTitleUser = function (projectTitle,userName, result) {
    dbConn.query(
      "Select * from file_details where projectTitle ='" + projectTitle + "' AND userName='"+userName+"'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };

  FileDetailUser.findAllByKeywordsUser = function (keyword,userName, result) {
    dbConn.query(
      "Select * from file_details where keywords LIKE '%" + keyword + "%' AND userName='"+userName+"'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };

  FileDetailUser.findAllByPeriodUser = function (period,userName, result) {
    dbConn.query(
      "Select * from file_details where deliveryPeriod ='" + period + "' AND  userName='"+userName+"'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };

  FileDetailUser.findAllByWriterByPeriodByLessonUser = function (period,lessonName,studentName, userName,result) {
    dbConn.query(
      "Select * from file_details where deliveryPeriod ='" + period + "' AND lessonName='"+lessonName+"' AND studentNameAndNumbersAndTypeOfTeaching LIKE '%" + studentName + "%' AND  userName='"+userName+"'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };



  module.exports = FileDetailUser;