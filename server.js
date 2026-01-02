const express = require('express');
const app = express();

app.use(express.json());
app.use('/students', require('./routes/studentRoutes'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/students`);
});
