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



Student.create = (newStudent, callback) => {
    const { name, age, ...otherFields } = newStudent;
    const sql = 'INSERT INTO students (name, age, ...) VALUES (?, ?, ...)';
    db.run(sql, [name, age, ...Object.values(otherFields)], callback);
};

Student.update = (id, studentData, callback) => {
    const { name, age, ...otherFields } = studentData;
    const sql = 'UPDATE students SET name = ?, age = ?, ... WHERE student_id = ?';
    db.run(sql, [name, age, ...Object.values(otherFields), id], callback);
};

Student.delete = (id, callback) => {
    const sql = 'DELETE FROM students WHERE student_id = ?';
    db.run(sql, [id], callback);
};


module.exports = Student;
