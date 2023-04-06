const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const secret = process.env.JWT_SECRET;

const getScoreSheetsByUserId = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization.split(' ')[1];

  try {
    jwt.verify(token, secret);
  } catch (e) {
    res.status(401).json({ error: 'Invalid token provided' });
    return;
  }

  const scoreSheets = await prisma.scoreSheet.findMany({
    where: {
      userId: Number(id),
    },
    include: {
      scoredSongs: true,
    },
  });

  res.json({ scoreSheets });
};

const createScoreSheet = async (req, res) => {
  const { id } = req.params;

  const { videoId, songNumber, artistName, songTitle, decade, score } =
    req.body;
  // const token = req.headers.authorization.split(' ')[1];

  // try {
  //   jwt.verify(token, secret);
  // } catch (e) {
  //   res.status(401).json({ error: 'Invalid token provided' });
  //   return;
  // }

  try {
    const scoreSheet = await prisma.scoreSheet.create({
      data: {
        user: {
          connect: {
            id: Number(id),
          },
        },
        scoredSongs: {
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
        scoredSongs: true,
      },
    });
    res.json({ scoreSheet });
  } catch (e) {
    return res.status(500).json({ error: 'server error' });
  }
};

const createScoredSong = async (req, res) => {
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

  const scoredSong = await prisma.scoredSong.create({
    data: {
      videoId,
      songNumber,
      artistName,
      songTitle,
      decade,
      score,
      scoreSheetId: Number(id),
    },
  });
  res.json({ scoredSong });
};

const createScore = async (req, res) => {
  const { value, id } = req.body;
  const token = req.headers.authorization.split(' ')[1];

  try {
    jwt.verify(token, secret);
  } catch (e) {
    res.status(401).json({ error: 'Invalid token provided' });
  }

  const createdScore = await prisma.score.create({
    data: {
      value,
      user: {
        connect: {
          id: Number(id),
        },
      },
    },
  });

  res.json({ createdScore });
};

const getAllScores = async (req, res) => {
  const scores = await prisma.score.findMany();
  res.json({ scores });
};

module.exports = {
  createScore,
  getAllScores,
  createScoreSheet,
  createScoredSong,
  getScoreSheetsByUserId,
};
