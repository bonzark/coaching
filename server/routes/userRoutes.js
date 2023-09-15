const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get a list of all users
router.get('/all', userController.getAllUsers);

module.exports = router;
