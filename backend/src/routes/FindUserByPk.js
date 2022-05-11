const { User } = require('../db/sequelize')
const auth = require('../auth/auth')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')


  
module.exports = (app) => {
  app.get('/api/user/:id', auth, (req, res) => {
    User.findByPk(req.params.id)
      .then(user => {
        const message = 'Un utilisateur a bien été trouvé.'

        if (user === null){
            const error = 'Aucun utilisateur a été trouvé.'
            res.json({ error })
            return
        }
        
        // On vérifie si l'utilisateur est le bon
        else {
          const authorizationHeader = req.headers.authorization
          const token = authorizationHeader.split(' ')[1]
          const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {

            if(decodedToken.userId != req.params.id){
              const error = "Problème d'authentification veuillez vous reconnecter."
              return res.status(401).json({ message, data: error })
              // AFFICHER UN MESSAGE D'ALERTE
            }
            else { res.json({ message, data: user }) }
          })

        }
      })
  })
}