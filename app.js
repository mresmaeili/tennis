const express = require('express');
const app = express();
const mongoose = require('mongoose');

//init middleware
app.use(express.json({ extended: false }));

const matchesRoute = require('./routes/matches');
const playersRoute = require('./routes/players');

app.use('/matches', matchesRoute);
app.use('/players', playersRoute);

app.get('/', (req, res) => {
  res.send('Tennis App');
});

mongoose.connect('process.env.DB_CONNECTION', { useNewUrlParser: true }, () =>
  console.log('MongoDB connected')
);
app.listen(3000);
