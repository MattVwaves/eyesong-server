const express = require('express');
const {
  createScoresheet,
  createScore,
  getScoresheetsByUserId,
} = require('../controllers/Score');

const router = express.Router();

router.post('/', createScoresheet);
router.post('/:id/', createScore);
router.get('/:id', getScoresheetsByUserId);

module.exports = router;
