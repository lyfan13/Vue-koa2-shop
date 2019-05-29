module.exports = function (sequelize, DataTypes) {
  return sequelize.define('address', {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'tel'
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'address'
    },
    checked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'checked'
    },
  })
}