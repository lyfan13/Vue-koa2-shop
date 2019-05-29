module.exports = function (sequelize, DataTypes) {
  return sequelize.define('detaillist', {
    // 文章ID
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    // 文章标题
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'title',
    },
  })
}