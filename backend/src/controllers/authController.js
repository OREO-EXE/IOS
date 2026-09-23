const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-for-dev';

exports.signup = async (req, res) => {
  const { name, email, password, campus } = req.body;
  if (!name || !email || !password || !campus) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    db.run(
      `INSERT INTO users (name, email, password, campus) VALUES (?, ?, ?, ?)`,
      [name, email, hashedPassword, campus],
      function (err) {
        if (err) {
          if (err.message.includes('UNIQUE constraint failed')) {
            return res.status(400).json({ error: 'Email already exists' });
          }
          return res.status(500).json({ error: 'Database error' });
        }
        
        const token = jwt.sign({ id: this.lastID, email, role: 'student' }, JWT_SECRET, { expiresIn: '1d' });
        res.status(201).json({ token, user: { id: this.lastID, name, email, campus, role: 'student' } });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token, user: { id: user.id, name: user.name, email: user.email, campus: user.campus, role: user.role } });
  });
};
