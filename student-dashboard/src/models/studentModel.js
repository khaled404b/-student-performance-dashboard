// backend/src/models/studentModel.js
const db = require('../db/database');

const Student = {
    getAll: (callback) => {
        db.all('SELECT * FROM students', (err, rows) => {
            if (err) {
                console.error("Error fetching students:", err.message);
                return callback(err);
            }
            console.log("Fetched students:", rows);
            return callback(null, rows);
        });
    },
    getById: (id, callback) => {
        db.get('SELECT * FROM students WHERE student_id = ?', [id], callback);
   },
   
    

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

Student.getPerformance = (callback) => {
    // Example SQL query - adjust it according to your data schema and needs
    const sql = 'SELECT date_column AS date, performance_metric AS score FROM students';
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error("Error fetching performance data:", err.message);
            return callback(err);
        }
        console.log("Fetched performance data:", rows);
        return callback(null, rows);
    });
};

module.exports = Student;
