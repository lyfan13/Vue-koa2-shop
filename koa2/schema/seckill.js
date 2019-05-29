module.exports = function (sequelize, DataTypes) {
  return sequelize.define('seckill', {
    // 文章ID
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    // 文章标题
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name',
    },
    // 文章作者
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
    oldprice: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'oldprice'
    },
  })
}