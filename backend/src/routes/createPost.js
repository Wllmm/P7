const { Post } = require('../db/sequelize')
const auth = require('../auth/auth')
const multer = require('../middleware/multer')
const fs = require('fs')

  
module.exports = (app) => {
  app.post('/api/posts', auth, multer, (req, res) => {

    console.log(req.file)
    console.log(req.body)
    

    // // Si c'est un repost
    if(req.body.reposted === true){
      console.log("C'est un repost")
      Post.create({ userId: req.body.userId, title: req.body.title, content: req.body.content, reposted: req.body.reposted, initialUser: req.body.initialUser, picturePath: req.body.picturePath})
      const message = `Post créer !.`
      res.json({ message, data: req.body })
      return
    }
    else { 
    let newPost = JSON.parse(req.body.body)
      console.log("ce n'est pas un repost")
      console.log(newPost)

      Post.create({ userId: newPost.userId, title: newPost.title, content: newPost.content, picturePath : req.file.filename})
      const message = `Post créer !.`
      res.json({ message, data: req.body })
    }
   
  })
}