const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT ||8000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require customer routes
const userRoutes = require('./src/routes/userRoute')
// using as middleware
app.use('/api/v1/users', userRoutes)  

const adminRoutes = require('./src/routes/adminRoute')
// using as middleware
app.use('/api/v1/admin', adminRoutes)  
// listen for requests

// Require customer routes
const fileRoutes = require('./src/routes/fileRoute')
// using as middleware
app.use('/api/v1/files', fileRoutes)  

// Require customer routes
const fileDetailsRoute = require('./src/routes/fileDetailRoute')
// using as middleware
app.use('/api/v1/fileDetails', fileDetailsRoute) 


// Require customer routes
const fileDetailsUserRoute = require('./src/routes/fileDetailsUserRoute')
// using as middleware
app.use('/api/v1/fileDetailsUser', fileDetailsUserRoute) 
/*

const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

var upload = multer({ storage: storage }).single('file')


app.post('/upload',function(req, res) {
     
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)

  })

});
*/













app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/*
const fs = require("fs")
const pdfparser = require("pdf-parse");  
const { type } = require('os');

const pdffile = fs.readFileSync("C://Users//fatma//Documents//Yazlab1Proje3//client//public//assets//files//170201025.pdf")

var outerCover=[];
var confirmationPage=[];
var allPages=[];
var lessonName="";
var projectTitle;
var titleCount;
var summary="";
let word="";
var keywords;   
var period;  
var juries=[];
var consultans=[];
var students=[];
var date;
pdfparser(pdffile).then(data => {

getPDFText("C://Users//fatma//Documents//Yazlab1Proje3//client//public//assets//files//170201025.pdf",1);
getPDFText("C://Users//fatma//Documents//Yazlab1Proje3//client//public//assets//files//170201025.pdf",2);
getPDFText("C://Users//fatma//Documents//Yazlab1Proje3//client//public//assets//files//170201025.pdf",20);

}).catch(err => {
    console.log(err)
});

const getPDFText = async (pdfFile, maxPages) => {
  let parsedPDF = ""
  let pdfBuffer = null
  try {
      if (fs.existsSync(pdfFile)) {
          pdfBuffer = fs.readFileSync(pdfFile)
          if (maxPages) {
             parsedPDF = await pdfparser(pdfBuffer, { max: maxPages })     
             if(maxPages==1){
            outerCover= parsedPDF.text.split("\n");
             }
            else if(maxPages==2)
             {
               confirmationPage= parsedPDF.text.split("\n");
               let i; 
               for(i=outerCover.length;i<confirmationPage.length;i++)
               {
                 if(confirmationPage[i].includes("ARA??TIRMA PROBLEMLER??"))
                 {
                  lessonName=confirmationPage[i];
                  
                   break;
                 }
                 else if(confirmationPage[i].includes("B??T??RME PROJES??"))
                 {
                  lessonName=confirmationPage[i];
                   break;
                 }

                
               }


               for(let j=i+1;j<confirmationPage.length;j++)
               {
                 if(confirmationPage[j]!=" ")
                 {
                  projectTitle=confirmationPage[j];
                  titleCount=1;
                  if(confirmationPage[j+1]!=" ")
                  {
                   projectTitle=confirmationPage[j]+""+confirmationPage[j+1];
                   titleCount=2;
                   if(confirmationPage[j+1]!=" "&&confirmationPage[j+2]!=" ")
                   {
                    projectTitle=confirmationPage[j]+""+confirmationPage[j+1]+""+confirmationPage[j+1];
                    titleCount=3;
                   }
                  }
                // console.log(lessonName);
                // console.log(projectTitle);
                break;
                 }
               }
               for(let m=i;m<confirmationPage.length;m++)
               {
                if(confirmationPage[m].includes("Tezin Savunuldu??u Tarih"))
                {
                date=confirmationPage[m].replace("Tezin Savunuldu??u Tarih:","").replace(" ","");

                if(parseInt(date.charAt(3)+date.charAt(4))>2||parseInt(date.charAt(3)+date.charAt(4))<9)
                {
                  
                  period="bahar "+date.charAt(6)+date.charAt(7)+date.charAt(8)+date.charAt(9);
                //  console.log(period);
                }
                else if(parseInt(date.charAt(3)+date.charAt(4))>=9||parseInt(date.charAt(3)+date.charAt(4))<3)
                {
                  
                  period="g??z "+date.charAt(6)+date.charAt(7)+date.charAt(8)+date.charAt(9);
                  console.log(period);
                }
                }
                if(confirmationPage[m].includes("Dan????man"))
                {
                 // console.log("dan????man:"+confirmationPage[m-1]);
                  consultans.push(confirmationPage[m-1])
                }
                if(confirmationPage[m].includes("J??ri ??yesi"))
                {
                // console.log("juri:"+confirmationPage[m-1]);

                  juries.push(confirmationPage[m-1]);
                }
              
               }
              
             }
             else{

              allPages= parsedPDF.text.split("\n");
              for(let k=0;k<allPages.length;k++)
              {
                if(allPages[k].includes("????renci No")&&allPages[k+1].includes("Ad?? Soyad??")&&allPages[k+2].includes("??mza"))
                {
                 // console.log(allPages[k].replace("????renci No:",""));
                //  console.log(allPages[k+1].replace("Ad?? Soyad??:",""));
                  if(allPages[k][15]=='2')
                  {
                    //console.log("2.????retim")
                    students.push(allPages[k].replace("????renci No:","")+allPages[k+1].replace("Ad?? Soyad??:","")+"2.????retim");
                  }
                  else if(allPages[k][15]=='1'){
                   // console.log("1.????retim");
                    students.push(allPages[k].replace("????renci No:","")+allPages[k+1].replace("Ad?? Soyad??:","")+"1.????retim");
                  }
                }
               
              }



              for(let k=confirmationPage.length;k<allPages.length;k++)
              {
                
               if(titleCount==1)
               {
                 if(allPages[k].includes(projectTitle)&&allPages[k+1].includes("??ZET"))
                 {
                  for(let l=k+2;l<allPages.length;l++)
                  {
                   
                    if(allPages[l].includes("Anahtar  kelimeler"))
                    {
                     // console.log(summary);
                      keywords=allPages[l].replace("Anahtar kelimeler","");
                      if(!keywords.includes('.'))
                      {
                        keywords=(allPages[l]+allPages[l+1]).replace(".","").replace("Anahtar  kelimeler:","");
                        if(!keywords.includes('.'))
                        {
                          keywords=(allPages[l]+allPages[l+1]+allPages[l+2]).replace("Anahtar  kelimeler:","");
                        }
                      }
                     // console.log("*************************************");
                    //  console.log(keywords);
                      k=allPages.length+4;
                      l=allPages.length+4;
                      break;
                    }
                    else{
                     
                       summary=word.concat(allPages[l]," ");
                       word=summary;
                    }
                  }
                 }

               }
               if(titleCount==2)
               {
                if((allPages[k]+""+allPages[k+1]).includes(projectTitle)&&allPages[k+2].includes("??ZET"))
                {
                  for(let l=k+3;l<allPages.length;l++)
                  {
                   
                    if(allPages[l].includes("Anahtar  kelimeler"))
                    {
                     // console.log(summary);
                      keywords=allPages[l].replace("Anahtar kelimeler","");
                      if(!keywords.includes('.'))
                      {
                        keywords=(allPages[l]+allPages[l+1]).replace(".","").replace("Anahtar  kelimeler:","");
                        if(!keywords.includes('.'))
                        {
                          keywords=(allPages[l]+allPages[l+1]+allPages[l+2]).replace("Anahtar  kelimeler:","");
                        }
                      }
                     // console.log("*************************************");
                    //  console.log(keywords);
                      k=allPages.length+4;
                      l=allPages.length+4;
                      break;
                    }
                    else{
                     
                       summary=word.concat(allPages[l]," ");
                       word=summary;
                    }
                  }
                  
                }
               }
               if(titleCount==3)
               {
                if((allPages[k]+" "+allPages[k+1]+" "+allPages[k+2]).includes(projectTitle)&&allPages[k+3].includes("??ZET"))
                {
                  for(let l=k+4;l<allPages.length;l++)
                  {
                   
                    if(allPages[l].includes("Anahtar  kelimeler"))
                    {
                     // console.log(summary);
                      keywords=allPages[l].replace("Anahtar kelimeler","");
                      if(!keywords.includes('.'))
                      {
                        keywords=(allPages[l]+allPages[l+1]).replace(".","").replace("Anahtar  kelimeler:","");
                        if(!keywords.includes('.'))
                        {
                          keywords=(allPages[l]+allPages[l+1]+allPages[l+2]).replace("Anahtar  kelimeler:","");
                        }
                      }
                     // console.log("*************************************");
                    //  console.log(keywords);
                      k=allPages.length+4;
                      l=allPages.length+4;
                      break;
                    }
                    else{
                     
                       summary=word.concat(allPages[l]," ");
                       word=summary;
                    }
                  }
                }
               }
              }
              let keyword=keywords.replace(".","");
              keywords=keyword;
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
             }
                        
          } 
       

      }
  } catch (err) {
      return err.message;
  }
};


*/