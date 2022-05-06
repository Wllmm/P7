const { User } = require('../db/sequelize')
const auth = require('../auth/auth')

  
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
        res.json({ message, data: user })
      })
  })
}