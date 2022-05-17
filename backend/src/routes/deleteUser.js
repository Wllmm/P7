const { User } = require('../db/sequelize')
const auth = require('../auth/auth')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')
const fs = require('fs')
const multer = require('../middleware/multer')

  
module.exports = (app) => {
  app.delete('/api/user/:id', auth, multer, (req, res) => {
    User.findByPk(req.params.id).then(user => {
      const userDeleted = user;
      console.log(user)

      const authorizationHeader = req.headers.authorization
      let userParams = ""
      let userId = ""
  
      const token = authorizationHeader.split(' ')[1]
      const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {
        userId = decodedToken.userId
        userParams = req.params.id
        
      })
      
      if(userId == userParams){

        User.findByPk(req.params.id)
        .then((res) => {
          console.log(res.dataValues.picturePath)
          fs.unlinkSync(`uploads/${res.dataValues.picturePath}`)
        })

        User.destroy({
            where: { id: user.id }
          })
          .then(_ => {
            const message = `Le user ${user} a bien été supprimé.`
            res.json({message, data: userDeleted })
          })
      }
      else{
        const message = `Problème d'authentification veuillez vous re-connecter.`
        return res.status(401).json({ message })
      }
    })
  })
}