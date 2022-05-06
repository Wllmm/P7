const { User } = require('../db/sequelize')

  
module.exports = (app) => {
  app.get('/api/:email', (req, res) => {
    User.findOne({ where: { email: req.params.email } })
      .then(user => {
        const message = 'Used'

        if (user === null){
            const error = 'Open'
            res.json({ error })
            return
        }
        res.json({ message, data: user })
      })
  })
}