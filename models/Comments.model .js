const mongoose = require('mongoose')
const { model, Schema } = require('mongoose')

const commentSchema = new Schema({
  tweets: { type: Schema.Types.ObjectId, ref: 'twitters' },
  users: String,
  comment: String,
  likes: String,
  saves: String,
})

const Comments = model('comments', commentSchema)

module.exports = Comments
