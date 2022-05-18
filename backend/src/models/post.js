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
      reposted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      initialUser: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      picturePath: {
        type: DataTypes.CHAR,
        allowNull: true
      }
    })
  }