module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    // 文章ID
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    // 文章标题
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'user',
    },
    // 文章作者
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