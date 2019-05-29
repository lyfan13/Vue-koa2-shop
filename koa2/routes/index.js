const router = require('koa-router')()
// 主页的navlist建立
const NavlistController = require('../controllers/navlist')
// router.post('/buildnavlist',NavlistController.create)
router.get('/navlist',NavlistController.detail)
// 主页的轮播图建立
// const SwiperController = require('../controllers/swiper')
// router.post('/buildswiper',SwiperController.create)
// 主页的秒杀商品建立
// const SeckillController = require('../controllers/seckill')
// router.post('/buildseckill',SeckillController.create)
// 主页显示商品的建立
// const HomeitemController = require('../controllers/homeitem')
// router.post('/buildhomeitem',HomeitemController.create)
// 所有商品的方法
const AllitemController = require('../controllers/allitem')
// router.post('/buildallitem',AllitemController.create)
// 打到所有商品
router.get('/getallitem',AllitemController.detail)
// 根据分类查找商品
router.get('/getallitem/:title',AllitemController.detaillist)
// 根据商品id获得单个商品
router.get('/getone/:id',AllitemController.oneitem)
// 搜索包含关键字的商品
router.post('/search',AllitemController.search)
// 详情页的数据建立
const DetaillistController = require('../controllers/detaillist')
// router.post('/builddetaillist',DetaillistController.create)
router.get('/getdetaillist',DetaillistController.detail)

//注册登录
const UserController = require('../controllers/user')
router.post('/signin',UserController.signin)
router.post('/login',UserController.login)
//创建和获取收货地址
const AddressController = require('../controllers/address')
router.post('/buildaddress',AddressController.create)
router.get('/deleteaddress/:id',AddressController.delete)
router.get('/getaddress/:user',AddressController.detail)

//首页的一个http请求 整合在一起
const NavlistModel = require('../modules/navlist')
const SwiperModel = require('../modules/swiper')
const HomeitemModel = require('../modules/homeitem')
const SeckillModel = require('../modules/seckill')
router.get('/gethome',async (ctx,next)=>{
  const [swiper,navlist,seckill,homeitem] = await Promise.all([SwiperModel.getSwiper(),NavlistModel.getNavlist(),SeckillModel.getSeckill(),HomeitemModel.getHomeitem()])
  ctx.body = {
    code:200,
    msg:'查询成功',
    swiper,navlist,seckill,homeitem
  }
})

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
