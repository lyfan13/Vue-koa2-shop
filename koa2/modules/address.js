// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Address = Sequelize.import('../schema/address');
// 自动创建表
Address.sync({ force: false });

class AddressModel {

  static async createAddress (data) {
    return await Address.create({
      user: data.user, 
      name: data.name,
      tel: data.tel,
      address: data.address,
      checked: data.checked,
    })
  }

  static async getAddress (user) {
    return await Address.findAll({
      where:{
        user
      }
    })
  }

  static async deleteAddress (id) {
    return await Address.destroy({
      where:{
        id
      }
    })
  }
}

module.exports = AddressModel