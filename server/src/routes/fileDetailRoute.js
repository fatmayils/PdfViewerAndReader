const express = require('express')
const router = express.Router()
const fileDetailsController =   require('../controllers/fileDetailsController');

router.get('/:fileId',fileDetailsController.findAllByFileId);

router.get('/sn/:studentName',fileDetailsController.findAllByWriterName);
router.get('/k/:keyword',fileDetailsController.findAllByKeywords);
router.get('/ln/:lessonName',fileDetailsController.findAllByLessonName);
router.get('/p/:period',fileDetailsController.findAllByPeriod);
router.get('/pt/:projectTitle',fileDetailsController.findAllByProjectTitle);
router.get('/:period/:lessonName/:studentName',fileDetailsController.findAllByWriterByPeriodByLesson);


module.exports = router