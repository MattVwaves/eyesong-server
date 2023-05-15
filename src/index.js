require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.disable('x-powered-by');
app.use(
  cors({
    origin: 'https://eyesong-client.onrender.com/',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./routers/User');
app.use('/user', userRouter);
const scoresheetRouter = require('./routers/Scoresheet');
app.use('/scoresheet', scoresheetRouter);

app.get('*', (req, res) => {
  res.json({ ok: true });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`\n Server is running on http://localhost:${port}\n`);
});
