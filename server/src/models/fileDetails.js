var dbConn = require("../../connection").db;
//User object create
var FileDetail = function (fileDetail) {
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
FileDetail.findAllByFileId = function (fileId, result) {
    dbConn.query(
      "Select * from file_details where fileId ='" + fileId + "'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };

  FileDetail.findAllByWriterName = function (studentName, result) {
    dbConn.query(
      "Select * from file_details where studentNameAndNumbersAndTypeOfTeaching LIKE '%" + studentName + "%'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };

  FileDetail.findAllByLessonName = function (lessonName, result) {
    dbConn.query(
      "Select * from file_details where lessonName ='" + lessonName + "'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };

  FileDetail.findAllByProjectTitle = function (projectTitle, result) {
    dbConn.query(
      "Select * from file_details where projectTitle ='" + projectTitle + "'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };

  FileDetail.findAllByKeywords = function (keyword, result) {
    dbConn.query(
      "Select * from file_details where keywords LIKE '%" + keyword + "%'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };

  FileDetail.findAllByPeriod = function (period, result) {
    dbConn.query(
      "Select * from file_details where deliveryPeriod ='" + period + "'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };

  FileDetail.findAllByWriterByPeriodByLesson = function (period,lessonName,studentName, result) {
    dbConn.query(
      "Select * from file_details where deliveryPeriod ='" + period + "' AND lessonName='"+lessonName+"' AND studentNameAndNumbersAndTypeOfTeaching LIKE '%" + studentName + "%'",
      function (err, res) {
        if (err) {
          result(null, err);
        } else {      
          result(null, res);
        }
      }
    );
  };



  FileDetail.findAllByWriterNameUser = function (studentName,userName, result) {
    console.log(studentName);
    console.log(userName);
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

  FileDetail.findAllByLessonNameUser = function (lessonName,userName, result) {
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

  FileDetail.findAllByProjectTitleUser = function (projectTitle,userName, result) {
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

  FileDetail.findAllByKeywordsUser = function (keyword,userName, result) {
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

  FileDetail.findAllByPeriodUser = function (period,userName, result) {
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

  FileDetail.findAllByWriterByPeriodByLessonUser = function (period,lessonName,studentName, userName,result) {
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



  module.exports = FileDetail;