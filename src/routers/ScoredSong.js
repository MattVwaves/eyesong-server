const express = require('express');
const { createScoredSong } = require('../controllers/Score');

const router = express.Router();

router.post('/:id', createScoredSong);

module.exports = router;
