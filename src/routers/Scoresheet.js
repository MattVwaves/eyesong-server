const express = require('express');
const { createScoresheet } = require('../controllers/Score');

const router = express.Router();

router.post('/', createScoresheet);

module.exports = router;
