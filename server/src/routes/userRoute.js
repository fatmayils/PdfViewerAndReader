const express = require('express')
const router = express.Router()
const userController =   require('../controllers/usersController');
// Retrieve all cargos
router.get('/', userController.findAll);
// Create a new cargo
router.post('/', userController.create);
// Retrieve a single cargo with id
router.get('/:userName', userController.findByUserName);
// Update a cargo with id
router.put('/:id', userController.update);
// Delete a cargo with id
router.delete('/:id', userController.delete);
router.get('/:userName/:userPassword', userController.findByUserNameAndPassword);

module.exports = router