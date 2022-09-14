const User = require('../models/Users.model')
module.exports.usersController = {
  // Добавить
  addUser: async (req, res) => {
    try {
      const { author, age } = req.body
      const user = await User.create({
        author,
        age,
      })
      res.json(user)
    } catch (err) {
      res.json(err)
    }
  },
  // Добавить к себе сохраненку
  addSave: async (req, res) => {
    try {
      const { tweetId } = req.body
      const save = await User.findByIdAndUpdate(req.params.id, {
        $push: { saved: tweetId },
      })
      res.json(save)
    } catch (err) {
      res.json(err)
    }
  },
  // Удалить пользователя
  deleteUser: async (req, res) => {
    try {
      const user = User.findByIdAndDelete(req.params.id)
      res.json(user)
    } catch (err) {
      res.json(err)
    }
  },
}
