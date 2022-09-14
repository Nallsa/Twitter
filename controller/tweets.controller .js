const Tweet = require('../models/Tweets.model')
module.exports.tweetsController = {
  // Добавить Твит
  addTweet: async (req, res) => {
    try {
      const { author, tweet } = req.body
      const tweets = await Tweet.create({
        author,
        tweet,
      })
      res.json(tweets)
    } catch (err) {
      res.json(err)
    }
  },
  // Добавить лайк
  addLikes: async (req, res) => {
    try {
      const { userId } = req.body
      const tweet = await Tweet.findByIdAndUpdate(req.params.id, {
        $push: { likes: userId },
      })
      res.json(tweet)
    } catch (err) {
      res.json(err)
    }
  },
  // Удалить лайк
  deleteLikes: async (req, res) => {
    try {
      const tweet = await Tweet.findByIdAndUpdate(req.params.id, {
        $pop: { likes: 1 },
      })
      res.json(tweet)
    } catch (err) {
      res.json(err)
    }
  },
  // Удалить Твит
  deleteTweet: async (req, res) => {
    try {
      const tweet = await Tweet.findByIdAndDelete(req.params.id)
      res.json(tweet)
    } catch (err) {
      res.json(err)
    }
  },
  // Просмотреть Твит
  getTweet: async (req, res) => {
    try {
      const tweet = await Tweet.find().populate(['author', 'likes'])
      res.json(tweet)
    } catch (err) {
      res.json(err)
    }
  },
}
