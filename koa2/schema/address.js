module.exports = function (sequelize, DataTypes) {
  return sequelize.define('address', {
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