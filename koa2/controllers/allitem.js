const AllitemModel = require('../modules/allitem')

class AllitemController {

  static create (ctx) {
    let req = ctx.request.body;
    if (req.id 
      && req.name 
      && req.imgurl 
      && req.price 
      && req.standard 
      && req.checked 
      && req.count 
      && req.sales 
      && req.stock 
      && req.imglist 
      && req.title 
      && req.category 
    ) {
      try {
        AllitemModel.createAllitem(req);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '创Allitem成功',
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: '创建Allitem失败',
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
      let data = await AllitemModel.getAllitem();
      // let data2 = await AllitemModel.getAllitem();
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

  static async detaillist (ctx) {
    let title = ctx.params.title
    console.log(title)
    if (title) {
      try {
        let data = await AllitemModel.getListitem(title);
        // let data2 = await AllitemModel.getAllitem();
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
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 416,
        msg: 'title必须传'
      }
    }
  }


  static async oneitem (ctx) {
    let id = ctx.params.id
    console.log(id)
    if (id) {
      try {
        let data = await AllitemModel.getOneitem(id);
        // let data2 = await AllitemModel.getAllitem();
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
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 416,
        msg: 'id'
      }
    }
  }


  static async search (ctx) {
    let name = ctx.request.body.name
    if (name) {
      try {
        let data = await AllitemModel.searchitem(name);
        // console.log(data)
        // let data2 = await AllitemModel.getAllitem();
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
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 416,
        msg: 'name必须传'
      }
    }
  }
}

module.exports = AllitemController