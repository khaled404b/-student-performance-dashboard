// backend/src/controllers/studentController.js
const Student = require('../models/studentModel');

exports.getAllStudents = (req, res) => {
    Student.getAll((err, data) => {
        if (err) {
            res.status(500).send({ message: err.message });
        } else {
            res.send(data);
        }
    });
};

exports.getStudentById = (req, res) => {
    Student.getById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message });
        } else {
            res.send(data);
        }
    });
};

// Implement controllers for create, update, delete...
