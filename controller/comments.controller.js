const Comments = require('../models/Genres.model')

module.exports.commentsController = {
  postComments: async (req, res) => {
    await Comments.create({
      users: req.body.users,
      tweets: req.body.tweets,
      likes: req.body.likes,
      saves: req.body.saves,
      // comments: req.body.comments,
    })
    res.json('Genres add')
  },
  deleteComments: async (req, res) => {
    await Comments.findByIdAndRemove(req.params.id)
    res.json('Genres delete')
  },
  getComments: async (req, res) => {
    const commentGet = await Comments.find()
    return res.json(commentGet)
  },
}
