
// backend/src/routes/studentRoutes.js
const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.get('/', studentController.getAllStudents);

router.get('/:id', studentController.getStudentById);

router.post('/', studentController.createStudent);

router.put('/:id', studentController.updateStudent);

router.delete('/:id', studentController.deleteStudent);

router.get('/performance/average-scores', studentController.getAverageScores);
router.get('/performance/gender', studentController.getPerformanceByGender);


module.exports = router;
