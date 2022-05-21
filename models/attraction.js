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
  attractionName: {type: String, required: true},
  website: String,
  description: {type: String, required: true}, 
  comments: [commentSchema]
}, {
  timestamps: true
})

module.export = mongoose.model('Attraction', attractionSchema);