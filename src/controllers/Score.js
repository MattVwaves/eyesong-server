const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const secret = process.env.JWT_SECRET;

const getScoresheetsByUserId = async (req, res) => {
  const { id } = req.body;
  const token = req.headers.authorization.split(' ')[1];

  try {
    jwt.verify(token, secret);
  } catch (e) {
    res.status(401).json({ error: 'Invalid token provided' });
    return;
  }

  const scoreSheets = await prisma.scoresheet.findMany({
    where: {
      userId: Number(id),
    },
    include: {
      songs: true,
    },
  });

  res.json({ scoreSheets });
};

const createScoresheet = async (req, res) => {
  const { id, videoId, songNumber, artistName, songTitle, decade, score } =
    req.body;
  const token = req.headers.authorization.split(' ')[1];

  try {
    jwt.verify(token, secret);
  } catch (e) {
    res.status(401).json({ error: 'Invalid token provided' });
    return;
  }

  try {
    const scoreSheet = await prisma.scoresheet.create({
      data: {
        user: {
          connect: {
            id: Number(id),
          },
        },
        songs: {
          create: {
            videoId,
            songNumber,
            artistName,
            songTitle,
            decade,
            score,
          },
        },
      },
      include: {
        songs: true,
      },
    });
    res.json({ scoreSheet });
  } catch (e) {
    return res.status(500).json({ error: 'server error' });
  }
};

const createScore = async (req, res) => {
  const { id } = req.params;
  const { videoId, songNumber, artistName, songTitle, decade, score } =
    req.body;
  const token = req.headers.authorization.split(' ')[1];

  try {
    jwt.verify(token, secret);
  } catch (e) {
    res.status(401).json({ error: 'Invalid token provided' });
    return;
  }

  const scoredSong = await prisma.song.create({
    data: {
      videoId,
      songNumber,
      artistName,
      songTitle,
      decade,
      score,
      scoresheet: {
        connect: {
          id: Number(id),
        },
      },
    },
  });
  res.json({ scoredSong });
};

const getAllScores = async (req, res) => {
  const scores = await prisma.score.findMany();
  res.json({ scores });
};

module.exports = {
  createScore,
  getAllScores,
  createScoresheet,
  getScoresheetsByUserId,
};
