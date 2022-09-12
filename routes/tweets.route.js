const { Router } = require('express')
const { reviewController } = require('../controller/review.controller')
const router = Router()

router.get('/review', reviewController.getReview)
router.post('/review', reviewController.postReview)
router.delete('/review/:id', reviewController.deleteReview)

module.exports = router
