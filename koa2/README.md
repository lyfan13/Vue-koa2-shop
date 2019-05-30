# koa-shop

## 主要中间件
``` 
[koa-cors、koa-router、mysql、sequelize(管理数据库)]
```
## 连接数据库
修改config/db.js里的信息去连接你的mysql数据库，可以把我备份的backup.sql导入直接看效果
``` javascript
const sequelize = new Sequelize('数据表名', '用户名', '密码', {
  host: 'localhost',
  dialect: 'mysql',
  port:3306,
  ...
  }
```

## Project start
```
npm start
```
## 运行成功图
![success](http://i2.bvimg.com/689071/073090492f7166c2.png)  


### Contact me
![微信](http://i2.bvimg.com/689071/0f7d3464ec0949fdt.jpg)  


