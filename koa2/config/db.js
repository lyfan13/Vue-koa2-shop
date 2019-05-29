const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const sequelize = new Sequelize('test', 'vueshop', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: { $like: Op.like },
  dialectOptions: {
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  port:3306,
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