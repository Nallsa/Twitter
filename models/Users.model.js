const mongoose = require('mongoose')

const userShema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tweets',
    },
  ],
})

const User = mongoose.model('Users', userShema)

module.exports = User
