const { Post } = require('../db/sequelize')
const auth = require('../auth/auth')
  
module.exports = (app) => {
  app.post('/api/posts', (req, res) => {

    Post.create({ userId: req.body.userId, title: req.body.title, content: req.body.content })
    const message = `Post créer !.`
    res.json({ message, data: req.body })

  })
}