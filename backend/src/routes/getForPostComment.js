const { Comment } = require('../db/sequelize')
const auth = require('../auth/auth')
  
module.exports = (app) => {
  app.get('/api/comment/post/:id', auth, (req, res) => {
    Comment.findAll( {where: { postId: req.params.id } } )
      .then(comments => {
        const message = 'Les commentaire du post ont bien été récupérés.'
        res.json({ message, data: comments })
      })
  })
}