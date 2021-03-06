const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/todo', require('./routes/todo'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
