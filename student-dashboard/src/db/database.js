// backend/src/db/database.js
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'student-dashboard.db'); // Adjust the path as needed
const schemaPath = path.join(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');

let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }

    console.log('Connected to the SQLite database.');
    db.exec(schema, (err) => {
        if (err) {
            console.error('Error executing schema script:', err.message);
        } else {
            console.log('Schema executed successfully.');
        }
    });
});

module.exports = db;
