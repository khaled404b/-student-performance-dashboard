
// backend/src/routes/studentRoutes.js
const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
// Define routes for POST, PUT, DELETE...

module.exports = router;
