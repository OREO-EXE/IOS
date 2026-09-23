const express = require('express');
const router = express.Router();
const clubsController = require('../controllers/clubsController');

router.get('/', clubsController.getAllClubs);
router.get('/:id', clubsController.getClubById);
router.post('/', clubsController.createClub);

module.exports = router;
