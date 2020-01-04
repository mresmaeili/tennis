const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  type: {
    type: String,
    enum: ['Point']
  },
  coordinates: {
    type: [Number]
  }
});

module.exports = Location = mongoose.model('location', locationSchema);
