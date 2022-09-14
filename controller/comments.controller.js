const Comment = require('../models/Comments.model ')
module.exports.commentsController = {
  // Добавить комментарий
  addComment: async (req, res) => {
    try {
      const { author, text, tweet } = req.body
      const comment = await Comment.create({
        author,
        text,
        tweet,
      })
      res.json(comment)
    } catch (err) {
      res.json('err')
    }
  },
  // Удалить комментарий
  deleteComment: async (req, res) => {
    try {
      const comment = Comment.findByIdAndRemove(req.params.id)
      res.json(comment)
    } catch (err) {
      res.json(err)
    }
  },
}
