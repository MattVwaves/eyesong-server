const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const secret = process.env.JWT_SECRET;

const createScore = async (req, res) => {
  const { value, userId, userName } = req.body;
  const token = req.headers.authorization.split(' ')[1];

  try {
    jwt.verify(token, secret);
  } catch (e) {
    res.status(401).json({ error: 'Invalid token provided' });
  }

  const createdScore = await prisma.score.create({
    data: {
      value,
      userName,
      user: {
        connect: {
          id: userId,
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
};
