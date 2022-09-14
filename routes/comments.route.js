const { Router } = require('express')
const { commentsController } = require('../controller/comments.controller')

const router = Router()

router.post('/comments', commentsController.addComment)
router.delete('/comments/:id', commentsController.deleteComment)

module.exports = router
