const { Sequelize, DataTypes } = require('sequelize')
const UserModel = require('../models/user')
const PostModel = require('../models/post')
const CommentModel = require('../models/comment')
// const TestModel = require('../models/test')



const bcrypt = require ('bcrypt')
  
const sequelize = new Sequelize('groupomania', 'root', '', {
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
// const Test = TestModel(sequelize, DataTypes)

Post.hasMany(Comment, {foreignKey: 'postId'})
Comment.belongsTo(Post, {foreignKey: 'postId'})


const initDb = () => {
  return sequelize.sync({force: false}).then(_ => {
    console.log('La base de donnée a bien été initialisée !')    

  })
}
  
module.exports = { 
  initDb, User, Post, Comment
}