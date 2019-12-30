const express = require('express');
const router = express.Router();

const Match = require('../models/Match');

router.get('/', (req, res) => {
  res.send('Match Info');
});
router.post('/', async (req, res) => {
  const match = new Match({
    court: req.body.court,
    matchType: req.body.matchType
  });

  try {
    await match.save();
    res.json(match);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
