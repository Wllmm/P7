const { User } = require('../db/sequelize')


  
module.exports = (app) => {
  app.get('/api/test/:id', (req, res) => {
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
             res.json({ message, data: user })
        }
     })
  })
}
