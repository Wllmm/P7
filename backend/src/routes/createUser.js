const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')
  
module.exports = (app) => {
  app.post('/api/users', (req, res) => {

        bcrypt.hash(req.body.password, 10)
        .then(hash => User.create({ username: req.body.username, password: hash, email: req.body.email }))
        .then(user => console.log(user.toJSON()))
        const message = `Bienvenu !.`
        res.json({ message, data: req.body })

  })
}