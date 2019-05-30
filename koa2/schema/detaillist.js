module.exports = function (sequelize, DataTypes) {
  return sequelize.define('detaillist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'title',
    },
  })
}