const { Post } = require('../db/sequelize')
const auth = require('../auth/auth')
const user = require('../models/user')

const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')


  
module.exports = (app) => {
  app.delete('/api/posts/:id', auth, (req, res) => {
    Post.findByPk(req.params.id).then(post => {
      
      const postDeleted = post;

      const authorizationHeader = req.headers.authorization
      const token = authorizationHeader.split(' ')[1]
      const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {    
      const userId = decodedToken.userId
      // On regarde si l'userId du token est le même que celui du créateur du post 
      if ( userId === post.userId ){
        Post.destroy({
          where: { id: post.id }
        })
        .then(_ => {
          const message = `Le post avec l'identifiant n°${postDeleted.id} a bien été supprimé.`
          res.json({message, data: postDeleted })
        })
      } 
      else {
        const message = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`
        return res.status(401).json({ message, data: error })    
      }
      })
    
      
        
          

   
    })
  })
}