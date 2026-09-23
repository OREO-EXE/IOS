const db = require('../config/db');

exports.getAllEvents = (req, res) => {
  db.all('SELECT * FROM events ORDER BY date ASC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(200).json(rows);
  });
};

exports.getEventById = (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM events WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!row) return res.status(404).json({ error: 'Event not found' });
    res.status(200).json(row);
  });
};

exports.createEvent = (req, res) => {
  // In a real app, organizer_id comes from req.user (JWT)
  const { title, description, date, location, organizer_id } = req.body;
  if (!title || !date || !location) {
    return res.status(400).json({ error: 'Title, date, and location are required' });
  }

  db.run(
    `INSERT INTO events (title, description, date, location, organizer_id) VALUES (?, ?, ?, ?, ?)`,
    [title, description, date, location, organizer_id || 1],
    function (err) {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(201).json({ id: this.lastID, title, description, date, location });
    }
  );
};
