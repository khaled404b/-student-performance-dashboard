const fs = require('fs');
const csvParser = require('csv-parser');
const db = require('../db/database');

const csvFilePath = 'C:\\Users\\hp\\Desktop\\MyProject\\GUST\\student-performance-dashboard\\student-dashboard\\src\\scripts\\student-por.csv';

fs.createReadStream(csvFilePath)
  .pipe(csvParser())
  .on('data', (row) => {
      const sql = `INSERT INTO students (school, sex, age, address, famsize, Pstatus, Medu, Fedu, Mjob_id, Fjob_id, reason, guardian, traveltime, studytime, failures, schoolsup, famsup, paid, activities, nursery, higher, internet, romantic, famrel, freetime, goout, Dalc, Walc, health, absences, G1, G2, G3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      db.run(sql, [row.school, row.sex, row.age, row.address, row.famsize, row.Pstatus, row.Medu, row.Fedu, row.Mjob, row.Fjob, row.reason, row.guardian, row.traveltime, row.studytime, row.failures, row.schoolsup, row.famsup, row.paid, row.activities, row.nursery, row.higher, row.internet, row.romantic, row.famrel, row.freetime, row.goout, row.Dalc, row.Walc, row.health, row.absences, row.G1, row.G2, row.G3], (err) => {
          if (err) {
              console.error("Error inserting row:", err.message);
          } else {
              console.log("Row inserted successfully.");
          }
      });
  })  
  .on('end', () => {
      console.log('CSV file successfully processed and data inserted into the database.');
  });
