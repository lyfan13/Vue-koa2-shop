module.exports = function (sequelize, DataTypes) {
  return sequelize.define('swiper', {
    // 文章ID
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
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
  })
}