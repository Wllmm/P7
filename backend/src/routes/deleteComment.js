const { Comment } = require('../db/sequelize')
const auth = require('../auth/auth')
const user = require('../models/user')
const { User } = require('../db/sequelize')

const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')


  
module.exports = (app) => {
  app.delete('/api/comments/:id', auth, (req, res) => {

    console.log(req)

    const authorizationHeader = req.headers.authorization
    const token = authorizationHeader.split(' ')[1]
    const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {    
    const userId = decodedToken.userId

      User.findByPk(userId)
      .then(user => {
        console.log(user.dataValues.idAdmin)

        // Si l'utilisateur est l'administrateur 
        if ( user.dataValues.idAdmin === true){
          Comment.findByPk(req.params.id).then(comment => {
            const commentDeleted = comment;
            Comment.destroy({
              where: { id: comment.id }
            })
            const message = `Le commentaire avec l'identifiant n°${commentDeleted.id} a bien été supprimé par l'administrateur.`
            res.json({message, data: commentDeleted })

          })
        }
    
        // Si c'est un utilisateur lambda
        else{
        Comment.findByPk(req.params.id).then(comment => {
            const commentDeleted = comment;

            const authorizationHeader = req.headers.authorization
            const token = authorizationHeader.split(' ')[1]
            const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {    
            const userId = decodedToken.userId
            console.log(comment.userId)

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
        }
      })
    })
  })
}