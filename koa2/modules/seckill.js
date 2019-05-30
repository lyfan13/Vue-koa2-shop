// 引入刚刚建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的数据表模型文件
const Seckill = Sequelize.import('../schema/seckill');
// 自动创建表
Seckill.sync({force: false});

class SeckillModel {

    static async createSeckill(data) {
        return await Seckill.create({
            id: data.id, 
            name: data.name, 
            imgurl: data.imgurl, 
            price: data.price, 
            oldprice: data.oldprice, 
        })
    }


    static async getSeckill() {
        return await Seckill.findAll({
        })
    }
}

module.exports = SeckillModel