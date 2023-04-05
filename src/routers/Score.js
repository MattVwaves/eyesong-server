const express = require('express');
const {
  createScore,
  getAllScores,
  createScoreSheet,
  createScoredSong,
  getScoreSheetsByUserId,
} = require('../controllers/Score');

const router = express.Router();

router.post('/', createScore);
router.post('/:id', createScoreSheet);
router.post('/score-sheet', createScoredSong);
router.get('/:id', getScoreSheetsByUserId);

module.exports = router;
