// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的数据表模型文件
const Swiper = Sequelize.import('../schema/swiper');
// 自动创建表
Swiper.sync({ force: false });

class SwiperModel {

  static async createSwiper (data) {
    return await Swiper.create({
      name: data.name, 
      imgurl: data.imgurl, 
    })
  }

  static async getSwiper () {
    return await Swiper.findAll({

    })
  }
}

module.exports = SwiperModel