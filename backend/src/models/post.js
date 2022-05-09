module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      content: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      like: {
        type: DataTypes.INTEGER,
      },
      dislike: {
        type: DataTypes.INTEGER,
      },
      comments: {
        type: DataTypes.CHAR,
      },
    })
  }