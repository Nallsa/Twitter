const Tweets = require('../models/Tweets.model')

module.exports.commentsController = {
  postTweets: async (req, res) => {
    await Tweets.create({
      users: req.body.users,
      tweets: req.body.tweets,
      likes: req.body.likes,
      saves: req.body.saves,
      // comments: req.body.comments,
    })
    res.json('Tweets add')
  },
  deleteTweets: async (req, res) => {
    await Comments.findByIdAndRemove(req.params.id)
    res.json('Tweets delete')
  },
  getTweets: async (req, res) => {
    const commentGet = await Comments.find()
    return res.json(commentGet)
  },
}
