const mongoose = require('mongoose')
const { model, Schema } = require('mongoose')

const tweetsSchema = new Schema({
  users: String,
  tweets: String,
  likes: String,
  saves: String,
})

const Tweets = model('tweetsSchema', tweetsSchema)

module.exports = Tweets
