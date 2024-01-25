// backend/routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');

router.get('/students', StudentController.getAllStudents);

module.exports = router;
