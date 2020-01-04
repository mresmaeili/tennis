const express = require('express');
const router = express.Router();

const Player = require('../../models/Player');

router.get('/', (req, res) => {
  res.send('Player Info');
});
router.post('/', async (req, res) => {
  const player = new Player({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    level: req.body.level,
    picture: req.body.picture
  });

  try {
    const savedPlayer = await player.save();
    res.json(savedPlayer);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
