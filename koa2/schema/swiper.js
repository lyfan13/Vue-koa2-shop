module.exports = function (sequelize, DataTypes) {
  return sequelize.define('swiper', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
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
  })
}