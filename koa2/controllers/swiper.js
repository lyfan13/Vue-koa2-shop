const SwiperModel = require('../modules/swiper')

class SwiperController {

  static create (ctx) {
    let req = ctx.request.body;
    if (req.name 
      && req.imgurl 
    ) {
      try {
        SwiperModel.createSwiper(req);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '创Swiper成功',
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '创建Swiper失败',
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: '参数不齐全',
      }
    }

  }

  //查找方法
  static async detail (ctx) {

    try {
      let data = await SwiperModel.getSwiper();
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data,
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

module.exports = SwiperController