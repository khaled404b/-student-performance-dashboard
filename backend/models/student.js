// backend/models/Student.js
const db = require('../database.js');

class Student {
    // Define methods to interact with the student data in your database
    // For example, a method to retrieve all students
    static getAll(callback) {
        const query = 'SELECT * FROM students';
        db.all(query, [], (err, rows) => {
            callback(err, rows);
        });
    }
    // More methods as needed...
}

module.exports = Student;
