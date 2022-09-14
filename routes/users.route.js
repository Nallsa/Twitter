const { Router } = require('express')
const { usersController } = require('../controller/users.controller')

const router = Router()

router.post('/users', usersController.addUser)
router.delete('/users/:id', usersController.deleteUser)
router.patch('/users/:id', usersController.addSave)

module.exports = router
