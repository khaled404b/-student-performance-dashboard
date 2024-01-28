// backend/src/app.js
const express = require('express');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

app.use('/students', studentRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
