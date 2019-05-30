const UserModel = require('../modules/user')
const sha1 = require('sha1')
const jwt = require('jsonwebtoken')
class UserController {

  static async signin (ctx) {
    // 接收客服端
    let req = {
      user: ctx.request.body.user,
      password: sha1(ctx.request.body.password),
      token: jwt.sign({ hello: ctx.request.body.user }, 'cheisy', { expiresIn: 24 * 60 * 60 * 1 })
    };
    if (req.user 
      && req.password 
    ) {

      let created = await UserModel.createUser(req)
      if (created) {
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '创建User成功',
          created
        }
      } else {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '创建user失败',
          created
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        msg: '参数不齐全',
      }
    }
  }


  static async login (ctx) {
    let req = {
      user: ctx.request.body.user,
      password: sha1(ctx.request.body.password)
    };
    try {
      let data = await UserModel.getUser(req);
      // let data2 = await UserModel.getUser();
      if (data) {
        ctx.response.status = 200;
        data.password = '*****'
        ctx.body = {
          code: 200,
          msg: '登录成功',
          data,
        }
      } else {
        ctx.response.status = 300;
        ctx.body = {
          code: 300, msg: '用户名或密码错误'
        }
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

module.exports = UserController