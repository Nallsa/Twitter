const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users',
  },
  text: {
    type: String,
    required: true,
  },
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweets',
  },
})

const Comment = mongoose.model('comments', commentSchema)

module.exports = Comment
