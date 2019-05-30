// 引入刚刚建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的数据表模型文件
const Homeitem = Sequelize.import('../schema/homeitem');
// 自动创建表
Homeitem.sync({force: false});

class HomeitemModel {

    static async createHomeitem(data) {
        return await Homeitem.create({
            id: data.id, 
            name: data.name, 
            imgurl: data.imgurl, 
            price: data.price, 
        })
    }


    static async getHomeitem() {
        return await Homeitem.findAll({
        })
    }
}

module.exports = HomeitemModel