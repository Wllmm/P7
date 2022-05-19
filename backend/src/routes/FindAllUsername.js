const { User } = require('../db/sequelize')


  
module.exports = (app) => {
  app.get('/api/allUser', (req, res) => {
    User.findAll()
      .then(user => {
        const message = 'Un utilisateur a bien été trouvé.'

        if (user === null){
            const error = 'Aucun utilisateur a été trouvé.'
            res.json({ error })
        }

        else {
          let users = [];
          for (let account of user){
            // console.log(account.dataValues)
            let test = { "id" : account.dataValues.id, "prenom" : account.dataValues.prenom, "nom" : account.dataValues.nom, "picture" : account.dataValues.picturePath }
            users.push(test) 
          }
             res.json({ message, data: users })
        }
     })
  })
}
