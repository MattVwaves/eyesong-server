const express = require('express');
const { createScore, getAllScores } = require('../controllers/Score');

const router = express.Router();

router.post('/', createScore);
router.get('/', getAllScores);

module.exports = router;
