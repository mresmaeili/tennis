const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'player'
  },
  court: {
    type: String,
    required: true
  },
  matchType: {
    type: String
    // default: 'single'
  },
  date: {
    type: Date
  },
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }]
  // gotta figureout which players are in that match with searching in the object
});

module.exports = Match = mongoose.model('match', matchSchema);
