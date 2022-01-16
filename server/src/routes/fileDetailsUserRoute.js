const express = require('express')
const router = express.Router()
const fileDetailsController =   require('../controllers/fileDetailsUserController');
router.get('/x/:studentName/:userName',fileDetailsController.findAllByWriterNameUser);
router.get('/y/:keyword/:userName',fileDetailsController.findAllByKeywordsUser);
router.get('/z/:lessonName/:userName',fileDetailsController.findAllByLessonNameUser);
router.get('/t/:period/:userName',fileDetailsController.findAllByPeriodUser);
router.get('/a/:projectTitle/:userName',fileDetailsController.findAllByProjectTitleUser);
router.get('/b/:period/:lessonName/:studentName/:userName',fileDetailsController.findAllByWriterByPeriodByLessonUser);

module.exports = router