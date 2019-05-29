const AddressModel = require('../modules/address')

class AddressController {

  static create (ctx) {
    // 接收客服端
    let req = ctx.request.body;
    if (req.name 
      && req.user 
    ) {
      try {
        AddressModel.createAddress(req);
        ctx.response.status = 200;
        ctx.body = {
          msg: '创Address成功',
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          msg: '创建Address失败',
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        msg: '参数不齐全',
        code:416
      }
    }

  }


  static async detail (ctx) {
    let user = ctx.params.user
    try {
      let data = await AddressModel.getAddress(user);
      // let data2 = await AddressModel.getAddress();
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
      }
    }
  }
  //删除方法
  static async delete (ctx) {
    let id = ctx.params.id
    try {
      let data = await AddressModel.deleteAddress(id);
      // let data2 = await AddressModel.getAddress();
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data,
        // data2
      }

    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '删除失败',
      }
    }
  }
}

module.exports = AddressController