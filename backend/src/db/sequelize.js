const { Sequelize, DataTypes } = require('sequelize')
const UserModel = require('../models/user')
const PostModel = require('../models/post')
const CommentModel = require('../models/comment')
require("dotenv").config()

const bcrypt = require ('bcrypt')
  
const sequelize = new Sequelize('groupomania', `${process.env.USERNAME_SQL}`,  `${process.env.PASSWORD_SQL}`, {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
  
const User = UserModel(sequelize, DataTypes)
const Post = PostModel(sequelize, DataTypes)
const Comment = CommentModel(sequelize, DataTypes)
// Copie Commentaires

Post.hasMany(Comment, {foreignKey: 'postId'})
Comment.belongsTo(Post, {foreignKey: 'postId'})


const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    console.log('La base de donnée a bien été initialisée !')    

  })
}
  
module.exports = { 
  initDb, User, Post, Comment
}