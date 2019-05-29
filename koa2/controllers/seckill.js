const SeckillModel = require('../modules/seckill')

class SeckillController {

  static create (ctx) {
    let req = ctx.request.body;
    if (req.id 
      && req.name 
      && req.imgurl 
      && req.price 
      && req.oldprice 
    ) {
      try {
        SeckillModel.createSeckill(req);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '创Seckill成功',
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: '创建Seckill失败',
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 200,
        msg: '参数不齐全',
      }
    }

  }


  static async detail (ctx) {

    try {
      let data = await SeckillModel.getSeckill();
      // let data2 = await SeckillModel.getSeckill();
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data,
        // data2
      }

    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
        data
      }
    }
  }
}

module.exports = SeckillController