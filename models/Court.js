const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point']
  },
  coordinates: {
    type: [Number]
  }
});

const courtSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: pointSchema
  }
});

module.exports = Court = mongoose.model('court', courtSchema);
module.exports = Point = mongoose.model('point', pointSchema);
