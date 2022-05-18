const { Post } = require('../db/sequelize')
const auth = require('../auth/auth')
const multer = require('../middleware/multer')
const fs = require('fs')

  
module.exports = (app) => {
  app.post('/api/posts', auth, multer, (req, res) => {

    // console.log(req.file)
    // console.log(req.body)
    // res.json("OK")
    

    console.log(req.body)
    // Si c'est un repost
    if(req.body.reposted === true){
      console.log("C'est un repost")
      Post.create({ userId: req.body.userId, title: req.body.title, content: req.body.content, reposted: req.body.reposted, initialUser: req.body.initialUser})
      const message = `Post créer !.`
      res.json({ message, data: req.body })
      return
    }
    else { 
      Post.create({ userId: req.body.userId, title: req.body.title, content: req.body.content})
      const message = `Post créer !.`
      res.json({ message, data: req.body })
    }
   
  })
}