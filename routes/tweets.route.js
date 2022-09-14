const { Router } = require('express')
const { tweetsController } = require('../controller/tweets.controller ')

const router = Router()

router.post('/tweets', tweetsController.addTweet)
router.delete('/tweets/:id', tweetsController.deleteTweet)
router.delete('/tweets/:id', tweetsController.deleteLikes)
router.get('/tweets', tweetsController.getTweet)
router.patch('/tweets/:id', tweetsController.addLikes)

module.exports = router
