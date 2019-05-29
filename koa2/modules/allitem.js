// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的数据表模型文件
const Allitem = Sequelize.import('../schema/allitem');
// 自动创建表
Allitem.sync({ force: false });

class AllitemModel {

  static async createAllitem (data) {
    return await Allitem.create({
      id: data.id, 
      name: data.name, 
      imgurl: data.imgurl, 
      price: data.price, 
      standard: data.standard, 
      checked: data.checked, 
      count: data.count, 
      sales: data.sales, 
      stock: data.stock, 
      imglist: data.imglist, 
    })
  }

  static async getAllitem () {
    return await Allitem.findAll({
      where: {
        id
      }
    })
  }

  //根据路由切换food/life/tech/cloths
  static async getListitem (title) {
    return await Allitem.findAll({
      where: {
        category: title,
      },
    })
  }

  //  根据id切换商品
  static async getOneitem (id) {
    return await Allitem.findOne({
      where: {
        id,
      },
    })
  }

  static async searchitem (name) {
    return await Allitem.findAll({
      where: {
        name: {
          $like: '%'+name+'%',
        }
      }
    })
  }
}

module.exports = AllitemModel