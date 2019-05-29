const NavlistModel = require('../modules/navlist')

class NavlistController {

  static create (ctx) {
    let req = ctx.request.body;
    if (req.id 
      && req.name 
      && req.imgurl 
    ) {
      try {
        NavlistModel.createNavlist(req);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '创navlist成功',
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: '创建navlist失败',
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
      let data = await NavlistModel.getNavlist();
      // let data2 = await NavlistModel.getNavlist();
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

module.exports = NavlistController