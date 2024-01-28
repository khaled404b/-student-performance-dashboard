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

exports.createStudent = (req, res) => {
    Student.create(req.body, (err, result) => {
        if (err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(201).send({ message: 'Student created successfully', result });
        }
    });
};

exports.updateStudent = (req, res) => {
    Student.update(req.params.id, req.body, (err, result) => {
        if (err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(200).send({ message: 'Student updated successfully', result });
        }
    });
};

exports.deleteStudent = (req, res) => {
    Student.delete(req.params.id, (err, result) => {
        if (err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(200).send({ message: 'Student deleted successfully', result });
        }
    });



};

exports.getPerformanceData = (req, res) => {
    Student.getPerformance((err, data) => {
            if (err) {
                console.log("getPerformanceData function:", studentController.getPerformanceData);
                res.status(500).send({ message: err.message });
            } else {
                res.send(data);
            }
        });
    }; 
