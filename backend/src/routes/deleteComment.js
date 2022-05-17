const { Comment } = require('../db/sequelize')
const auth = require('../auth/auth')
const user = require('../models/user')

const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')


  
module.exports = (app) => {
  app.delete('/api/comments/:id', auth, (req, res) => {
    Comment.findByPk(req.params.id).then(comment => {
      
      const commentDeleted = comment;

      const authorizationHeader = req.headers.authorization
      const token = authorizationHeader.split(' ')[1]
      const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {    
      const userId = decodedToken.userId
      // On regarde si l'userId du token est le même que celui du créateur du post 
      if ( userId === comment.userId ){
        Comment.destroy({
          where: { id: comment.id }
        })
        .then(_ => {
          const message = `Le commentaire avec l'identifiant n°${commentDeleted.id} a bien été supprimé.`
          res.json({message, data: commentDeleted })
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