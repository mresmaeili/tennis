const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = Schema({
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
  avatar: {
    type: String,
    default:
      'https://cdn4.iconfinder.com/data/icons/professions-1-2/151/36-512.png'
  },
  matches: [{ type: Schema.Types.ObjectId, ref: 'match' }]
});

module.exports = Player = mongoose.model('player', playerSchema);
