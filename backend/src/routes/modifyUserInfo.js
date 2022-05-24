const { User } = require('../db/sequelize')
const auth = require('../auth/auth')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')
const bcrypt = require('bcrypt')
const multer = require('../middleware/multer')

  
module.exports = (app) => {
  app.put('/api/user/:id', auth, multer,(req, res) => {

    // On regarde si l'id dans le TOKEN est le même que celui de la requête 
    const authorizationHeader = req.headers.authorization
    let userParams = ""
    let userId = ""

    const token = authorizationHeader.split(' ')[1]
    const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {
      userId = decodedToken.userId
      userParams = req.params.id
      
    })
    console.log(userParams)
    console.log(userId)
    // Si c'est bon on continue :
    if (userParams == userId){
      const id = req.params.id

      // Si changement d'image : 
      if (req.file !== undefined){
        console.log(req.file)

        User.findByPk(req.params.id)
        .then((res) => {
          console.log(res.dataValues.picturePath)
          if (res.dataValues.picturePath === "default.png"){
            return
          }else { fs.unlinkSync(`uploads/${res.dataValues.picturePath}`) }
        })


        const path = req.file.filename
        User.update({picturePath : path}, {
          where: { id: id }
        })

        
        res.json({ file: req.file });
        return
      }

      // Besoin de crypter si changement de mdp 
      if (!req.body.password){
        User.update(req.body, {
          where: { id: id }
        })
        .then(_ => {
          User.findByPk(id).then(user => {
            const message = `Le user ${user} a bien été modifié.`
            res.json({message, data: user })
          })
        })
      }
      // Cryptage : 
      else{
        bcrypt.hash(req.body.password, 10)
        .then((hash) => 
          User.update({ password : hash}, {
            where: { id: id }
          })
          .then(_ => {
            User.findByPk(id).then(user => {
              const message = `Le user ${user} a bien été modifié.`
              res.json({message, data: user })
            })
          })
        )
        
      }
    
    }else{
      const message = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`
      return res.status(401).json({ message })
    }
  })
}