/*
SQLyog Ultimate v12.08 (32 bit)
MySQL - 5.5.62 : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `test`;

/*Table structure for table `addresses` */

DROP TABLE IF EXISTS `addresses`;

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `checked` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

/*Data for the table `addresses` */

insert  into `addresses`(`id`,`user`,`name`,`tel`,`address`,`checked`) values (18,'cheisy','所发生的','1','所发生的',0),(19,'cheisy','所发生的方式','1','爽肤水',0),(20,'cheisy','爽肤水','1','舒服舒服',0),(21,'cheisy','所发生的肤水','1','舒服似睡非睡 舒服',0),(22,'cheisy1122','爽肤水','1','舒服舒服',0),(24,'pop00','ggg','1','ghgy',0),(25,'11','双方都','1','是否',0);

/*Table structure for table `allitems` */

DROP TABLE IF EXISTS `allitems`;

CREATE TABLE `allitems` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `standard` varchar(255) NOT NULL,
  `checked` tinyint(1) NOT NULL,
  `count` varchar(255) NOT NULL,
  `sales` varchar(255) NOT NULL,
  `stock` varchar(255) NOT NULL,
  `imglist` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `allitems` */

insert  into `allitems`(`id`,`name`,`imgurl`,`price`,`standard`,`checked`,`count`,`sales`,`stock`,`imglist`,`title`,`category`) values (1000,'山药薯片','/assets/item-all/food/1/1.jpg','38','5包/件',1,'1','100','200','[1, 2, 3, 4, 5, 6]','超好吃的山药薯片','food'),(1001,'卤味','/assets/item-all/food/2/1.jpg','41','3包/件',1,'1','50','300','[1, 2, 3, 4, 5, 6]','超好吃的卤味','food'),(1002,'巧克力','/assets/item-all/food/3/1.jpg','30','5包/件',1,'1','22','50','[1, 2, 3, 4, 5, 6]','超好吃的巧克力','food'),(2000,'牙膏','/assets/item-all/life/1/1.jpg','18','5支/件',1,'1','66','200','[1, 2, 3, 4, 5, 6]','超好用的牙膏','life'),(2001,'按摩床','/assets/item-all/life/2/1.jpg','3200','1件',1,'1','10','20','[1, 2, 3, 4, 5, 6]','超好用的按摩床','life'),(2002,'冰箱','/assets/item-all/life/3/1.jpg','999','1台',1,'1','55','155','[1, 2, 3, 4, 5, 6]','超好用的冰箱','life'),(3000,'台式电脑','/assets/item-all/tech/1/1.jpg','4599','显示器+主机',1,'1','555','888','[1, 2, 3, 4, 5, 6]','超好用的台式电脑','tech'),(3001,'内存条','/assets/item-all/tech/2/1.jpg','388','1条',1,'1','77','200','[1, 2, 3, 4, 5, 6]','超好用的内存条','tech'),(3002,'三星手机','/assets/item-all/tech/3/1.jpg','5633','原装',1,'1','15','110','[1, 2, 3, 4, 5, 6]','超好用的三星手机','tech'),(4000,'衣服1','/assets/item-all/wear/1/1.jpg','38','1件',1,'1','88','200','[1, 2, 3, 4, 5, 6]','很舒服的衣服1','cloths'),(4001,'衣服2','/assets/item-all/wear/2/1.jpg','41','1件',1,'1','77','300','[1, 2, 3, 4, 5, 6]','很舒服的衣服2','cloths'),(4002,'衣服3','/assets/item-all/wear/3/1.jpg','38','1件',1,'1','66','200','[1, 2, 3, 4, 5, 6]','很舒服的衣服3','cloths');

/*Table structure for table `articles` */

DROP TABLE IF EXISTS `articles`;

CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `articles` */

/*Table structure for table `detaillists` */

DROP TABLE IF EXISTS `detaillists`;

CREATE TABLE `detaillists` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `detaillists` */

insert  into `detaillists`(`id`,`title`) values (0,'food'),(1,'life'),(2,'tech'),(3,'cloths');

/*Table structure for table `homeitems` */

DROP TABLE IF EXISTS `homeitems`;

CREATE TABLE `homeitems` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `homeitems` */

insert  into `homeitems`(`id`,`name`,`imgurl`,`price`) values (1000,'山药薯片','/assets/item-all/food/1/1.jpg','38'),(1001,'卤味','/assets/item-all/food/2/1.jpg','41'),(1002,'巧克力','/assets/item-all/food/3/1.jpg','30'),(2000,'牙膏','/assets/item-all/life/1/1.jpg','18'),(2001,'按摩床','/assets/item-all/life/2/1.jpg','3200'),(2002,'冰箱','/assets/item-all/life/3/1.jpg','999'),(3000,'电脑主机','/assets/item-all/tech/1/1.jpg','4599'),(3001,'内存条','/assets/item-all/tech/2/1.jpg','388'),(3002,'三星手机','/assets/item-all/tech/3/1.jpg','5633'),(4000,'衣服1','/assets/item-all/wear/1/1.jpg','38'),(4001,'衣服2','/assets/item-all/wear/2/1.jpg','45'),(4002,'衣服3','/assets/item-all/wear/3/1.jpg','50');

/*Table structure for table `navlists` */

DROP TABLE IF EXISTS `navlists`;

CREATE TABLE `navlists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `navlists` */

insert  into `navlists`(`id`,`name`,`imgurl`) values (0,'零食','/assets/home-nav/01.png'),(1,'生活','/assets/home-nav/03.png'),(2,'科技','/assets/home-nav/04.png'),(3,'衣服','/assets/home-nav/05.png'),(5,'TODO','/assets/home-nav/01.png');

/*Table structure for table `seckills` */

DROP TABLE IF EXISTS `seckills`;

CREATE TABLE `seckills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `oldprice` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4001 DEFAULT CHARSET=utf8;

/*Data for the table `seckills` */

insert  into `seckills`(`id`,`name`,`imgurl`,`price`,`oldprice`) values (1002,'巧克力','/assets/item-all/food/3/1.jpg','30','60'),(2000,'牙膏','/assets/item-all/life/1/1.jpg','18','35'),(2002,'冰箱','/assets/item-all/life/3/1.jpg','999','1500'),(3002,'三星手机','/assets/item-all/tech/3/1.jpg','5633','6000'),(4000,'衣服1','/assets/item-all/wear/1/1.jpg','38','58');

/*Table structure for table `swipers` */

DROP TABLE IF EXISTS `swipers`;

CREATE TABLE `swipers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `swipers` */

insert  into `swipers`(`id`,`name`,`imgurl`) values (1,'零食','/assets/home-swiper/1.jpg'),(2,'生活','/assets/home-swiper/2.jpg'),(3,'科技','/assets/home-swiper/3.jpg'),(4,'衣服','/assets/home-swiper/4.jpg');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`user`,`password`,`token`) values (15,'cheis1','7110eda4d09e062aa5e4a390b0a572ac0d2c0220','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6ImNoZWlzMSIsImlhdCI6MTU1OTAzNjg3MCwiZXhwIjoxNTU5MTIzMjcwfQ._bRnM4doABaQpzcSD9ZSjwFDgTsBieaKv514vApOWXU'),(16,'cheis2','7110eda4d09e062aa5e4a390b0a572ac0d2c0220','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6ImNoZWlzMiIsImlhdCI6MTU1OTAzNjk3MiwiZXhwIjoxNTU5MTIzMzcyfQ.pCMRHpZQU5xa72pobKyHrFZg0UceLbkk4GJElZT6Wck'),(17,'cheisy','40bd001563085fc35165329ea1ff5c5ecbdbbeef','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6ImNoZWlzeSIsImlhdCI6MTU1OTAzOTU4OSwiZXhwIjoxNTU5MTI1OTg5fQ.O5MTkeuhqpgFnLoF8btHIJqTPuxTykqWmUQp-3EfeeM'),(18,'ko1','40bd001563085fc35165329ea1ff5c5ecbdbbeef','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6ImtvMSIsImlhdCI6MTU1OTA1NTk2NCwiZXhwIjoxNTU5MTQyMzY0fQ.CnlFGzzb9Bwr4mIxoUuJiPgsC-qMKNlUI-6GFW_10H4'),(19,'cheisy1','40bd001563085fc35165329ea1ff5c5ecbdbbeef','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6ImNoZWlzeTEiLCJpYXQiOjE1NTkwNTYxNDksImV4cCI6MTU1OTE0MjU0OX0.UaiSfRpsBwCYqPgGOT3wfY2STUkSRxQ93bEeZAfKseg'),(20,'cheisy22','40bd001563085fc35165329ea1ff5c5ecbdbbeef','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6ImNoZWlzeTIyIiwiaWF0IjoxNTU5MDU2NDE0LCJleHAiOjE1NTkxNDI4MTR9.rAUiROVjlILbvN0lDl2eo099rfjdOA6Y4-4CAIWMQ5s'),(21,'cheisy111','40bd001563085fc35165329ea1ff5c5ecbdbbeef','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6ImNoZWlzeTExMSIsImlhdCI6MTU1OTA1NjQ0MiwiZXhwIjoxNTU5MTQyODQyfQ.XFHmiZgfG0hYp-lc61pwhv6kiQ-np4jKGX_OKaE9-WE'),(22,'cheisy1111','40bd001563085fc35165329ea1ff5c5ecbdbbeef','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6ImNoZWlzeTExMTEiLCJpYXQiOjE1NTkwNTY2NzAsImV4cCI6MTU1OTE0MzA3MH0.7tNAuZBHmixjCJafiHt6hoWrT4qOdNxoESmcpMnEfGA'),(23,'cheisy1122','40bd001563085fc35165329ea1ff5c5ecbdbbeef','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6ImNoZWlzeTExMjIiLCJpYXQiOjE1NTkwNTY5ODAsImV4cCI6MTU1OTE0MzM4MH0.dwMS_bY6gwH7M0T2rPnLIPmWhKvOmWqzLyhI0l11R04'),(24,'chance','89672e31f1b123d3a44b2fe55678d41f3c493717','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6ImNoYW5jZSIsImlhdCI6MTU1OTA1ODI3OCwiZXhwIjoxNTU5MTQ0Njc4fQ.HCYVhS0PGp8u46WKkrsrbOOr78XYA9g_3OczibBTb6w'),(25,'pop00','40bd001563085fc35165329ea1ff5c5ecbdbbeef','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6InBvcDAwIiwiaWF0IjoxNTU5MDU4OTQ3LCJleHAiOjE1NTkxNDUzNDd9.-kxuCSh0_9TvSLmmGQVHfUBBC96Vja2WyCzilrzpq0Y'),(26,'11','40bd001563085fc35165329ea1ff5c5ecbdbbeef','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6IjExIiwiaWF0IjoxNTU5MDU5MzkwLCJleHAiOjE1NTkxNDU3OTB9.aKw-vPBM-2LULoGcSdMn9QOCle30LBiy5xOjBkHeUzA');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
