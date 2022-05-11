const { Comment } = require('../db/sequelize')
const auth = require('../auth/auth')
  
module.exports = (app) => {
  app.post('/api/post/:id/comment', auth, (req, res) => {
    console.log(req.body)
    Comment.create({ postId: req.params.id, userId: req.body.userId, content: req.body.content })
    const message = `Commentaire créer !.`
    res.json({ message, data: req.body })

  })
}