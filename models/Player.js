const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  email: {
    type: String,
    index: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  level: {
    type: Number,
    default: 1
  },
  picture: {
    //type Buffr for images - config later if needed
    type: String,
    default:
      'https://cdn4.iconfinder.com/data/icons/professions-1-2/151/36-512.png'
  },
  matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Matches' }]
  // gottaa figureout available matches and the matches player is already singed in for
});

module.exports = Player = mongoose.model('player', playerSchema);
