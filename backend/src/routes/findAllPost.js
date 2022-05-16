const { Post } = require('../db/sequelize')
const auth = require('../auth/auth')
  
module.exports = (app) => {
  app.get('/api/post', auth, (req, res) => {
    Post.findAll()
      .then(posts => {
        const message = 'La liste des posts a bien été récupérée.'
        res.json({ message, data: posts })
      })
  })
}