const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const sequelize = new Sequelize('test', 'vueshop', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port:3306,
  dialectOptions: {
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  //搜索功能的like
  operatorsAliases: { $like: Op.like },
  define: {
    //字符集
    charset: 'utf8',
    //时间戳
    timestamps: false,
    dialectOptions: {
      collate: 'utf8_general_ci'
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00' //东八时区
});

module.exports = {
  sequelize
}