// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Detaillist = Sequelize.import('../schema/detaillist');
// 自动创建表
Detaillist.sync({ force: false });

class DetaillistModel {

  static async createDetaillist (data) {
    return await Detaillist.create({
      id: data.id, // 文章标题
      title: data.title, // 文章作者
    })
  }


  static async getDetaillist () {
    return await Detaillist.findAll({
    })
  }
}

module.exports = DetaillistModel