const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')
  
module.exports = (app) => {
  app.post('/api/users', (req, res) => {

        let regTxt = /^[A-Za-z]+$/;
        let regPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,40}/
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/

        // Vérification des champs renseignés
        if(regTxt.test(req.body.prenom) === false || 
          regTxt.test(req.body.nom) === false ||
          // regDate.test(req.body.date) === false || 
          regPassword.test(req.body.password) === false ||
          regEmail.test(req.body.email) === false ){
          const message = `Un champ n'est pas correctement renseigné.`
          res.json({ message, data: req.body })
        }
        else {
          bcrypt.hash(req.body.password, 10)
          .then(hash => User.create({ prenom: req.body.prenom, nom: req.body.nom, date: req.body.date, password: hash, email: req.body.email, picturePath : "default.png" }))
          .then(user => console.log(user.toJSON()))
          const message = `Bienvenu !.`
          res.json({ message, data: req.body })
        }



      

  })
}