const express = require('express');
const { createScoresheet, createScore } = require('../controllers/Score');

const router = express.Router();

router.post('/', createScoresheet);
router.post('/:id/', createScore);

module.exports = router;
