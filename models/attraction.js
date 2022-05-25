const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//an attraction has many comments, a comment belongs to an attraction
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