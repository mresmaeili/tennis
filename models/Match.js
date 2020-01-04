const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = Schema({
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: 'player'
    }
  ],
  court: {
    type: Schema.Types.ObjectId,
    ref: court
  },
  matchType: {
    type: String,
    default: 'single'
  },
  date: {
    type: Date
  }
});

module.exports = Match = mongoose.model('match', matchSchema);
