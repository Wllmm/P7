const { Post } = require('../db/sequelize')
const auth = require('../auth/auth')
const multer = require('../middleware/multer')
const fs = require('fs')

  
module.exports = (app) => {
  app.post('/api/posts', auth, multer, (req, res) => {

    console.log(req.file)
    console.log(req.body)
    
    let newPost = JSON.parse(req.body.body)
    // console.log(newPost.userId)
    // res.json("OK")
    


    // // Si c'est un repost
    // if(req.body.reposted === true){
    //   console.log("C'est un repost")
    //   Post.create({ userId: req.body.userId, title: req.body.title, content: req.body.content, reposted: req.body.reposted, initialUser: req.body.initialUser})
    //   const message = `Post créer !.`
    //   res.json({ message, data: req.body })
    //   return
    // }
    // else { 
    //   console.log("ce n'est pas un repost")
    //   Post.create({ userId: newPost.userId, title: newPost.title, content: newPost.content, picturePath : req.file.filename})
    //   const message = `Post créer !.`
    //   res.json({ message, data: req.body })
    // }
   
  })
}