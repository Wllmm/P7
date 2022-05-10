module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Comment', {

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      content: {
        type: DataTypes.CHAR,
        allowNull: false
      },
    })
  }