// backend/src/models/studentModel.js
const db = require('../db/database');

const Student = {
    getAll: (callback) => {
        db.all('SELECT * FROM students', callback);
    },
    getById: (id, callback) => {
        db.get('SELECT * FROM students WHERE student_id = ?', [id], callback);
    },
    // Add methods for create, update, delete...
};

module.exports = Student;
