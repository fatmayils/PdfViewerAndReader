const express = require('express')
const router = express.Router()
const adminController =   require('../controllers/adminController');
router.get('/', adminController.findAll);

// Retrieve a single cargo with id
router.get('/:adminName/:adminPassword', adminController.findByUserName);
// Update a cargo with id

module.exports = router