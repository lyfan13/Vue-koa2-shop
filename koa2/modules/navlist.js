// 引入刚刚建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的数据表模型文件
const Navlist = Sequelize.import('../schema/navlist');
// 自动创建表
Navlist.sync({ force: false });

class NavlistModel {

  static async createNavlist (data) {
    return await Navlist.create({
      id: data.id, 
      name: data.name, 
      imgurl: data.imgurl, 
    })
  }


  static async getNavlist () {
    return await Navlist.findAll({

    })
  }
}

module.exports = NavlistModel