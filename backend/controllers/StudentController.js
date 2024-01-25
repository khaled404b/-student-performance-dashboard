// backend/controllers/StudentController.js
const Student = require('../models/student');

exports.getAllStudents = (req, res) => {
    Student.getAll((err, students) => {
        if (err) res.status(500).send(err.message);
        res.status(200).json(students);
    });
};
