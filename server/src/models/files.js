var dbConn = require("../../connection").db;
//User object create
var File = function (file) {
  this.fileName = file.fileName;
  this.userName = file.userName;
  this.userFirstAndLastName = file.userFirstAndLastName;
};

File.create = function (newFile, result) {
  console.log("jkkkkkkkkkkkkkkkbnkb::::::::::::::" + newFile.fileName);
  dbConn.query("INSERT INTO files set ?", newFile, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      dbConn.query(
        "SELECT * FROM files order by id desc limit 1",
        function (err, res1) {
          if (err) {
            console.log("error: ", err);
            result(err, null);
          } else {
            details(res1[0].id, res1[0].fileName,res1[0].userName);
            // console.log(res1[0].id);
          }
        }
      );
    }
  });
};

File.findAll = function (result) {
  dbConn.query("Select * from files", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      //console.log("files : ", res);
      result(null, res);
    }
  });
};

File.findAllByUserName = function (userName, result) {
  dbConn.query(
    "Select * from files where userName ='" + userName + "'",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        //  console.log("files : ", res);
        result(null, res);
      }
    }
  );
};
File.delete = function (id, result) {
  dbConn.query("DELETE FROM files WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

details = function (id, fileUrl,userName) {
  const fs = require("fs");
  const pdfparser = require("pdf-parse");
  const { type } = require("os");

  const pdffile = fs.readFileSync(fileUrl);

  var outerCover = [];
  var confirmationPage = [];
  var allPages = [];
  var lessonName = "";
  var projectTitle;
  var titleCount;
  var summary = "";
  let word = "";
  var keywords;
  var period;
  var juries = [];
  var consultans = [];
  var students = [];
  var date;
  pdfparser(pdffile)
    .then((data) => {
      getPDFText(fileUrl, 1);
      getPDFText(fileUrl, 2);
      getPDFText(fileUrl, 20);
    })
    .catch((err) => {
      console.log(err);
    });

  const getPDFText = async (pdfFile, maxPages) => {
    let parsedPDF = "";
    let pdfBuffer = null;
    try {
      if (fs.existsSync(pdfFile)) {
        pdfBuffer = fs.readFileSync(pdfFile);
        if (maxPages) {
          parsedPDF = await pdfparser(pdfBuffer, {
            max: maxPages,
          });
          if (maxPages == 1) {
            outerCover = parsedPDF.text.split("\n");
          } else if (maxPages == 2) {
            confirmationPage = parsedPDF.text.split("\n");
            let i;
            for (i = outerCover.length; i < confirmationPage.length; i++) {
              if (confirmationPage[i].includes("ARA??TIRMA PROBLEMLER??")) {
                lessonName = confirmationPage[i];

                break;
              } else if (confirmationPage[i].includes("B??T??RME PROJES??")) {
                lessonName = confirmationPage[i];
                break;
              }
            }

            for (let j = i + 1; j < confirmationPage.length; j++) {
              if (confirmationPage[j] != " ") {
                projectTitle = confirmationPage[j];
                titleCount = 1;
                if (confirmationPage[j + 1] != " ") {
                  projectTitle =
                    confirmationPage[j] + "" + confirmationPage[j + 1];
                  titleCount = 2;
                  if (
                    confirmationPage[j + 1] != " " &&
                    confirmationPage[j + 2] != " "
                  ) {
                    projectTitle =
                      confirmationPage[j] +
                      "" +
                      confirmationPage[j + 1] +
                      "" +
                      confirmationPage[j + 2];
                    titleCount = 3;
                  }
                }
                 console.log(lessonName);
                 console.log(projectTitle);
                break;
              }
            }
            for (let m = i; m < confirmationPage.length; m++) {
              if (confirmationPage[m].includes("Tezin Savunuldu??u Tarih")) {
                date = confirmationPage[m]
                  .replace("Tezin Savunuldu??u Tarih:", "")
                  .replace(" ", "");

                if (
                  parseInt(date.charAt(3) + date.charAt(4)) > 2 &&
                  parseInt(date.charAt(3) + date.charAt(4)) < 9
                ) {
                  period =
                    "bahar " +
                    date.charAt(6) +
                    date.charAt(7) +
                    date.charAt(8) +
                    date.charAt(9);
                    console.log(period);
                } else if (
                  parseInt(date.charAt(3) + date.charAt(4)) >= 9 ||
                  parseInt(date.charAt(3) + date.charAt(4)) < 3
                ) {
                  period =
                    "g??z " +
                    date.charAt(6) +
                    date.charAt(7) +
                    date.charAt(8) +
                    date.charAt(9);
                  console.log(period);
                }
              }
              if (confirmationPage[m].includes("Dan????man")) {
                 console.log("dan????man:"+confirmationPage[m-1]);
                consultans.push(confirmationPage[m - 1]);
              }
              if (confirmationPage[m].includes("J??ri ??yesi")) {
                 console.log("juri:"+confirmationPage[m-1]);

                juries.push(confirmationPage[m - 1]);
              }
            }
          } else {
            allPages = parsedPDF.text.split("\n");
            for (let k = 0; k < allPages.length; k++) {
              if (
                allPages[k].includes("????renci No") &&
                allPages[k + 1].includes("Ad?? Soyad??") &&
                allPages[k + 2].includes("??mza")
              ) {
                 console.log(allPages[k].replace("????renci No:",""));
                  console.log(allPages[k+1].replace("Ad?? Soyad??:",""));
                if (allPages[k][17] == "2") {
                  console.log("2.????retim")
                  students.push(
                    allPages[k].replace("????renci No:", "") +
                      allPages[k + 1].replace("Ad?? Soyad??:", "") +
                      "2.????retim"
                  );
                } else if (allPages[k][17] == "1") {
                   console.log("1.????retim");
                  students.push(
                    allPages[k].replace("????renci No:", "") +
                      allPages[k + 1].replace("Ad?? Soyad??:", "") +
                      "1.????retim"
                  );
                }
              }
            }

            for (let k = confirmationPage.length; k < allPages.length; k++) {
              if (titleCount == 1) {
                if (
                  allPages[k].includes(projectTitle) &&
                  allPages[k + 2].includes("??ZET")
                ) {
                  for (let l = k + 2; l < allPages.length; l++) {
                    if (allPages[l].includes("Anahtar  kelimeler")) {
                      // console.log(summary);
                      keywords = allPages[l].replace("Anahtar kelimeler", "");
                      if (!keywords.includes(".")) {
                        keywords = (allPages[l] + allPages[l + 1])
                          .replace(".", "")
                          .replace("Anahtar  kelimeler:", "");
                        if (!keywords.includes(".")) {
                          keywords = (
                            allPages[l] +
                            allPages[l + 1] +
                            allPages[l + 2]
                          ).replace("Anahtar  kelimeler:", "");
                        }
                      }
                      // console.log("*************************************");
                      //  console.log(keywords);
                      k = allPages.length + 4;
                      l = allPages.length + 4;
                      break;
                    } else {
                      summary = word.concat(allPages[l], " ");
                      word = summary;
                    }
                  }
                }
              }
              if (titleCount == 2) {
                if (
                  (allPages[k] + "" + allPages[k + 1]).includes(projectTitle) &&
                  allPages[k + 2].includes("??ZET")
                ) {
                  for (let l = k + 3; l < allPages.length; l++) {
                    if (allPages[l].includes("Anahtar  kelimeler")) {
                      // console.log(summary);
                      keywords = allPages[l].replace("Anahtar kelimeler", "");
                      if (!keywords.includes(".")) {
                        keywords = (allPages[l] + allPages[l + 1])
                          .replace(".", "")
                          .replace("Anahtar  kelimeler:", "");
                        if (!keywords.includes(".")) {
                          keywords = (
                            allPages[l] +
                            allPages[l + 1] +
                            allPages[l + 2]
                          ).replace("Anahtar  kelimeler:", "");
                        }
                      }
                      // console.log("*************************************");
                      //  console.log(keywords);
                      k = allPages.length + 4;
                      l = allPages.length + 4;
                      break;
                    } else {
                      summary = word.concat(allPages[l], " ");
                      word = summary;
                    }
                  }
                }
              }
              if (titleCount == 3) {
               
                if (
              (
                    allPages[k] +
                    "" +
                    allPages[k + 1] +
                    "" +
                    allPages[k + 2]
                  ).includes(projectTitle) &&
                  allPages[k + 4].includes("??ZET")
                ) {
                  console.log("fghgfds");
                  for (let l = k + 4; l < allPages.length; l++) {
                    if (allPages[l].includes("Anahtar  kelimeler")) {
                      // console.log(summary);
                      keywords = allPages[l].replace("Anahtar kelimeler", "");
                      if (!keywords.includes(".")) {
                        keywords = (allPages[l] + allPages[l + 1])
                          .replace(".", "")
                          .replace("Anahtar  kelimeler:", "");
                        if (!keywords.includes(".")) {
                          keywords = (
                            allPages[l] +
                            allPages[l + 1] +
                            allPages[l + 2]
                          ).replace("Anahtar  kelimeler:", "");
                        }
                      }
                      // console.log("*************************************");
                      //  console.log(keywords);
                      k = allPages.length + 4;
                      l = allPages.length + 4;
                      break;
                    } else {
                      summary = word.concat(allPages[l], " ");
                      word = summary;
                    }
                  }
                }
              }
            }
            let keyword = keywords.replace(".", "");
            keywords = keyword;
            console.log("yazarlar");
            console.log(students);
            console.log("ders ad??");
            console.log(lessonName);
            console.log("??zet");
            console.log(summary);
            console.log("d??nem");
            console.log(period);
            console.log("proje ba??l??????");
            console.log(projectTitle);
            console.log("anahtar kelimeler");
            console.log(keywords);
            console.log("dan????manlar");
            console.log(consultans);
            console.log("juriler");
            console.log(juries);

            dbConn.query(
              "INSERT INTO file_details(lessonName,projectTitle,studentNameAndNumbersAndTypeOfTeaching,projectSummary,deliveryPeriod,keywords,consultantInformation,juryInformation,fileId,userName) values('"+lessonName+"','"+projectTitle+"','"+students.join()+"','"+summary+"','"+period+"','"+keywords+"','"+consultans.join()+"','"+juries.join()+"','"+id+"','"+userName+"')",
              function (err, res) {
                if (err) {
                  console.log("error: ", err);
                 
                }
              }
            );
          }
        }
      }
    } catch (err) {
      return err.message;
    }
  };
};

module.exports = File;
