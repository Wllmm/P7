module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      prenom: {
        type: DataTypes.STRING,
        allowNull: false
      },

      nom: {
        type: DataTypes.STRING,
        allowNull: false
      },

      date: {
        type: DataTypes.DATE,
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
      picturePath: {
        type: DataTypes.CHAR,
        allowNull: true
      }
    })
  }