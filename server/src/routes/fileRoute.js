const express = require('express')
const router = express.Router()
const fileController =   require('../controllers/filesController');
// Retrieve all cargos

router.post('/',fileController.create);
router.delete('/:id', fileController.delete);
router.get('/',fileController.findAll);
router.get('/:userName',fileController.findAllByUserName);
module.exports = router