module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'user',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'token'
    },
  })
}