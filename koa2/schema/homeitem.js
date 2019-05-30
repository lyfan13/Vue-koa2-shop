module.exports = function (sequelize, DataTypes) {
  return sequelize.define('homeitem', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name',
    },
    imgurl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'imgurl'
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'price'
    },
  })
}