const DetaillistModel = require('../modules/detaillist')

class DetaillistController {

  static create (ctx) {
    let req = ctx.request.body;
    if (req.id
      && req.title
    ) {
      try {
        DetaillistModel.createDetaillist(req);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '创Detail成功',
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: '创建Detail失败',
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
      let data = await DetaillistModel.getDetaillist();
      // let data2 = await DetailModel.getDetail();
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

module.exports = DetaillistController