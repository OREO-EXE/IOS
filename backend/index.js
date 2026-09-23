const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./src/config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./src/routes/authRoutes');
const eventsRoutes = require('./src/routes/eventsRoutes');
const clubsRoutes = require('./src/routes/clubsRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/clubs', clubsRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
