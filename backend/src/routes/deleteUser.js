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

        console.log(userDeleted)

        if (userDeleted.dataValues.picturePath === null){
          console.log("Pas d'image")

          User.destroy({
            where: { id: user.id }
            })  
          message = `Le compte a bien été supprimer.`
          return res.status(200).json({ message })

        }
        else{
          console.log("Il y a une image a delete")

          fs.unlinkSync(`uploads/${userDeleted.dataValues.picturePath}`),
            User.destroy({
            where: { id: user.id }
            })  
          message = `Le compte a bien été supprimer.`
          return res.status(200).json({ message })

        }

        // User.findByPk(req.params.id)
        // .then((res) => {
          // console.log(res.dataValues)

          // if (res.dataValues.picturePath === null){
          //   console.log("Pas de photo a delete")
          //   User.destroy({
          //         where: { id: user.id }
          //       })
          // }
          // else { 
          //   fs.unlinkSync(`uploads/${res.dataValues.picturePath}`),
          //   User.destroy({
          //   where: { id: user.id }
          //   })  
          // }
        // })

        // User.destroy({
        //     where: { id: user.id }
        //   })
        //   .then(_ => {
        //     const message = `Le user ${user} a bien été supprimé.`
        //     res.json({message, data: userDeleted })
        //     return
        //   })
      }
      else{
        const message = `Problème d'authentification veuillez vous re-connecter.`
        return res.status(401).json({ message })
      }
    })
  })
}