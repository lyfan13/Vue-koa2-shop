module.exports = function (sequelize, DataTypes) {
  return sequelize.define('allitem', {
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
    standard: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'standard'
    },
    checked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'checked'
    },
    count: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'count'
    },
    sales: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'sales'
    },
    stock: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'stock'
    },
    imglist: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'imglist'
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'title'
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'category'
    },
  })
}