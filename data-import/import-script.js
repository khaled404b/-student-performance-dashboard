// data-import/import-script.js
const fs = require('fs');
const csvParser = require('csv-parser');
const db = require('../backend/database');

fs.createReadStream('student-por.csv')
  .pipe(csvParser())
  .on('data', (row) => {
    // Insert each row into the database
    const insert = 'INSERT INTO students (name, score) VALUES (?, ?)';
    db.run(insert, [row.name, row.score]);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
