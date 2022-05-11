const { Post } = require('../db/sequelize')
const auth = require('../auth/auth')

  
module.exports = (app) => {
  app.put('/api/post/:id', auth, (req, res) => {
    const id = req.params.id
    Post.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      Post.findByPk(id).then(post => {
        const message = `Le post ${post} a bien été modifié.`
        res.json({message, data: post })
      })
    })
  })
}