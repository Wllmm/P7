module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false
      },

      password: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      
      email: {
        type: DataTypes.CHAR,
        unique: {
          msg: "Le mail est déjà pris."
        },
        allowNull: false
      },
    })
  }