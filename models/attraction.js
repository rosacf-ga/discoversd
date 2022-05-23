const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
  content: {type: String, required: true}
}, {
  timestamps: true
})

//an attraction has many comments, a comment belongs to an attraction
const attractionSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  attractionName: String,
  website: String,
  photoUrl: String,
  description: String, 
  comments: [commentSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Attraction', attractionSchema);