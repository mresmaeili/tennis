const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courtSchema = Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: 'location'
  },
  rating: {
    type: Number,
    default: 0
  }
});

module.exports = Court = mongoose.model('court', courtSchema);
