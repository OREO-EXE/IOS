const db = require('../config/db');

exports.getAllClubs = (req, res) => {
  db.all('SELECT * FROM clubs ORDER BY name ASC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(200).json(rows);
  });
};

exports.getClubById = (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM clubs WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!row) return res.status(404).json({ error: 'Club not found' });
    res.status(200).json(row);
  });
};

exports.createClub = (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  db.run(
    `INSERT INTO clubs (name, description) VALUES (?, ?)`,
    [name, description],
    function (err) {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(201).json({ id: this.lastID, name, description });
    }
  );
};
