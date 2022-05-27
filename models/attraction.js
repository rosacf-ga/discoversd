const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attractionSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  attractionName: String,
  website: String,
  photoUrl: String,
  description: String, 
}, {
  timestamps: true
})

module.exports = mongoose.model('Attraction', attractionSchema);