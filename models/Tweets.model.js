const mongoose = require('mongoose')

const tweetsSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users',
  },
  tweet: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  ],
})

const Tweet = mongoose.model('tweets', tweetsSchema)

module.exports = Tweet
