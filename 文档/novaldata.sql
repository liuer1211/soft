/*
Navicat MySQL Data Transfer

Source Server         : nodelyun
Source Server Version : 50650
Source Host           : 180.76.106.221:3306
Source Database       : novaldata

Target Server Type    : MYSQL
Target Server Version : 50650
File Encoding         : 65001

Date: 2022-07-19 20:58:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `noval`
-- ----------------------------
DROP TABLE IF EXISTS `noval`;
CREATE TABLE `noval` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `num` varchar(8) DEFAULT '' COMMENT '书籍编号：自增字符',
  `title` varchar(255) DEFAULT '' COMMENT '标题',
  `author` varchar(80) DEFAULT '' COMMENT '作者',
  `title_type_code` varchar(200) DEFAULT '' COMMENT '小说类型',
  `title_type_name` varchar(500) DEFAULT '',
  `act_date` varchar(8) DEFAULT '' COMMENT '发布日期',
  `instro` varchar(1000) DEFAULT '' COMMENT '简介',
  `context` text COMMENT '内容',
  `img_name` varchar(80) DEFAULT '' COMMENT '图片名称',
  `video_name` varchar(255) DEFAULT '' COMMENT '视频名称',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of noval
-- ----------------------------
INSERT INTO `noval` VALUES ('1', '0000001', '夜灵犀传奇', '六耳', '01,02', '武侠/爱情', '20220522', '年少热血气如虹，暮年病榻万事空。江湖纷争几时休，笑看痴人坠其中。', '<p>相传三国时期，铸剑名家打造了三把赫赫有名的宝剑，分别是：黑曜、赤灵、素渊。\r\n传闻只要三者得其一便可得天下，而这三把宝剑也被魏蜀吴三国的君主各占其一。随着时代的更迭，这三把宝剑也辗转不知了去向。</p> <p>几百年后青莲剑客以一篇《蜀道难》送友人入蜀，传闻这其间还有另鲜为人知的一个秘密。有传言黑曜当时正巧在蜀地现世，像李白这样的剑客又怎能不心动。若得其剑，传一封书信，纵使所隔千里，势必星夜赶至。但是天意弄人，青莲剑客至死也未曾得见这把旷世宝剑。</p> <p>又几百年过去了，又传言这把宝剑在小重山出现，霎时间，江湖又起波澜。曾记得，十年前，一位年纪不满二十的少年横空出世，打破了沉寂已久的江湖，此人便是夜灵犀。没有人知道这少年从何处来，师承何门何派，只记得他只身一人前往少林，挑战主持方丈后全身而退。如今，黑曜现世，又将会带给他怎样的劫数。</p>', '1.jpg', '001.mp4', '2022-05-22 21:27:50', '2022-07-15 22:45:27');

-- ----------------------------
-- Table structure for `noval_type`
-- ----------------------------
DROP TABLE IF EXISTS `noval_type`;
CREATE TABLE `noval_type` (
  `id` int(10) NOT NULL,
  `noval_key` varchar(10) DEFAULT NULL COMMENT '类型：01人物；02武学；03门派；04兵器；05宿命；06诗歌词赋',
  `noval_value` varchar(50) DEFAULT NULL,
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of noval_type
-- ----------------------------

-- ----------------------------
-- Table structure for `novel_fatalism`
-- ----------------------------
DROP TABLE IF EXISTS `novel_fatalism`;
CREATE TABLE `novel_fatalism` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '',
  `instro` varchar(500) DEFAULT '',
  `descr` varchar(500) DEFAULT '',
  `img` varchar(50) DEFAULT '',
  `showt_time` datetime DEFAULT NULL,
  `address` varchar(200) DEFAULT '',
  `create_time` datetime DEFAULT NULL,
  `noval_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel_fatalism
-- ----------------------------
INSERT INTO `novel_fatalism` VALUES ('1', '夜灵犀、苏晚', '', '香楼听曲', '', null, '月与楼', null, '1');
INSERT INTO `novel_fatalism` VALUES ('2', '夜灵犀、恒叶方丈', '', '初试江湖', '', null, '少室山', null, '1');
INSERT INTO `novel_fatalism` VALUES ('3', '夜灵犀、李玉帛', '', '邪剑之争', '', null, '小重山', null, '1');
INSERT INTO `novel_fatalism` VALUES ('4', '夜灵犀、百里梦、妙乐', '', '山庄论剑', '', null, '名剑山庄', null, '1');
INSERT INTO `novel_fatalism` VALUES ('5', '夜灵犀、风花雪月', '', '风花雪月', '', null, '小重山', null, '1');
INSERT INTO `novel_fatalism` VALUES ('6', '夜灵犀、程瞎子、苏晚', '', '投石问路', '', null, '吉祥赌坊', null, '1');

-- ----------------------------
-- Table structure for `novel_kungfu`
-- ----------------------------
DROP TABLE IF EXISTS `novel_kungfu`;
CREATE TABLE `novel_kungfu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '',
  `instro` varchar(500) DEFAULT '',
  `descr` varchar(500) DEFAULT '',
  `img` varchar(50) DEFAULT '',
  `create_time` datetime DEFAULT NULL,
  `noval_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel_kungfu
-- ----------------------------
INSERT INTO `novel_kungfu` VALUES ('1', '惊雷剑法', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('2', '凤舞九天', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('3', '乾坤生死决', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('4', '燕云七绝', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('5', '扶摇九天', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('6', '迷魂大法', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('7', '弹指沁音', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('8', '混元功', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('9', '魅影迷踪', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('10', '伏魔功', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('11', '昔月剑法', '', '', '', null, '1');
INSERT INTO `novel_kungfu` VALUES ('12', '断魂掌', '', '', '', null, '1');
INSERT INTO `novel_kungfu` VALUES ('13', '陆家剑法', '', '', '', null, '1');
INSERT INTO `novel_kungfu` VALUES ('14', '妙手回春', '', '', '', null, '1');

-- ----------------------------
-- Table structure for `novel_other`
-- ----------------------------
DROP TABLE IF EXISTS `novel_other`;
CREATE TABLE `novel_other` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '',
  `instro` varchar(500) DEFAULT '',
  `descr` varchar(500) DEFAULT '',
  `img` varchar(50) DEFAULT '',
  `showt_time` datetime DEFAULT NULL,
  `address` varchar(200) DEFAULT '',
  `create_time` datetime DEFAULT NULL,
  `noval_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel_other
-- ----------------------------
INSERT INTO `novel_other` VALUES ('1', '六耳', '影成双', '<p>夜微凉</p><p>月照窗</p><p>轻舟过小桥</p><p>倩影泛波光</p><p>仙衣衬玉指 朱唇配红妆</p><p>举止半含羞 柔情两相望</p><p>曾经沧海 最是牵人肠</p><p>地老天荒 终是将身藏</p><br/> <p>窗外明月如常</p><p>你我再见渺茫</p><p>孤星依旧现微光</p><p>而我只能将你深藏</p> <p>晚风轻抚脸庞</p> <p>刻意掀起过往</p> <p>坐看星河两相傍</p> <p>轻舟涟漪影成双</p><br/> <p>风作响</p><p>柳轻扬</p> <p>刀剑掠残影</p> <p>眉宇现寒光</p> <p>古今名与利 好似梦一场</p> <p>江湖多风雨 岁月显沧桑</p> <p>锦袖一挥 断念隐街巷</p> <p>拂尘而去 且将余生藏</p><br/> <p>窗外明月如常</p> <p>你我再见渺茫</p> <p>孤星依旧现微光</p> <p>而我只能将你深藏</p> <p>晚风轻抚脸庞</p> <p>刻意掀起过往</p> <p>坐看星河两相傍</p> <p>轻舟涟漪影成双</p> ', '', null, '', null, '1');
INSERT INTO `novel_other` VALUES ('2', '六耳', '落日有感', '<p>\r\n                  信步山岭间，离别故园久。<br/>\r\n                  迎面凉风拂，不觉已入秋。<br/>\r\n                  落日照大地，余晖暖山丘。<br/>\r\n                  人生多坎坷，美景不长留。\r\n                </p>', '', null, '', null, '1');

-- ----------------------------
-- Table structure for `novel_people`
-- ----------------------------
DROP TABLE IF EXISTS `novel_people`;
CREATE TABLE `novel_people` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '',
  `instro` varchar(2000) DEFAULT '',
  `descr` varchar(2000) DEFAULT '',
  `img` varchar(50) DEFAULT '',
  `create_time` datetime DEFAULT NULL,
  `noval_id` bigint(20) DEFAULT NULL,
  `kung_fu` varchar(100) DEFAULT '',
  `sect` varchar(100) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel_people
-- ----------------------------
INSERT INTO `novel_people` VALUES ('1', '夜灵犀', '燕云山庄', '年少成名，一手绝技独步江湖。对于他的本事，江湖中人都是这样流传的“锦绣一挥，神佛难挡”。', '22.jpg', '2022-07-15 23:04:13', '1', '3,4,5', '1');
INSERT INTO `novel_people` VALUES ('2', '苏晚', '魔教圣女', '', '22.jpg', '2022-07-15 23:04:13', '1', '7', '2');
INSERT INTO `novel_people` VALUES ('3', '百里梦', '剑神', '一剑流年，昔月无痕', '22.jpg', '2022-07-15 23:04:13', '1', '11', '3');
INSERT INTO `novel_people` VALUES ('4', '妙乐', '天才俗家弟子', '', '22.jpg', '2022-07-15 23:04:13', '1', '10', '4');
INSERT INTO `novel_people` VALUES ('5', '李玉帛', '人心不足', '虽集百家大成，但误入歧途，至此事件又多一段孽债', '22.jpg', '2022-07-15 23:04:13', '1', '13', '5');
INSERT INTO `novel_people` VALUES ('6', '陆秋艳', '江南第一美女', '', '22.jpg', '2022-07-15 23:04:13', '1', '13', '5');
INSERT INTO `novel_people` VALUES ('7', '落梅', '别离门走后一任，人称“妙手回春”', '无梅谷中无死人，阴阳散下无活物', null, null, '1', '14', '1');
INSERT INTO `novel_people` VALUES ('8', '陈瞎子', '国师', '占卜星象，吹拉弹唱，江湖百晓生', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('9', '陆秋荣', '陆家', '红颜薄命', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('10', '风花雪月', '隐士高人四大弟子', '', '', null, '1', '', '');
 


-- ----------------------------
-- Table structure for `novel_sect`
-- ----------------------------
DROP TABLE IF EXISTS `novel_sect`;
CREATE TABLE `novel_sect` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '',
  `instro` varchar(500) DEFAULT '',
  `descr` varchar(500) DEFAULT '',
  `img` varchar(50) DEFAULT '',
  `create_time` datetime DEFAULT NULL,
  `noval_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel_sect
-- ----------------------------
INSERT INTO `novel_sect` VALUES ('1', '燕云山庄', null, '四面环山，云雾缭绕，日出映月', null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('2', '魔教', null, '断崖之上，云天之巅', null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('3', '名剑山庄', null, '天下一剑，亦正亦邪', null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('4', '少林寺', null, '嵩山有寺，北斗之望', null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('5', '正威镖局', null, '太湖之畔，国色天香', null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('6', '奔月宫', null, '生死轮回，如梦如幻', null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('7', '别离门', null, '幽谷寒舍，鸟语花香', null, '2022-07-16 16:10:51', '1');

-- ----------------------------
-- Table structure for `novel_type`
-- ----------------------------
DROP TABLE IF EXISTS `novel_type`;
CREATE TABLE `novel_type` (
  `id` decimal(19,2) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `noval_key` varchar(255) DEFAULT '',
  `noval_value` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel_type
-- ----------------------------

-- ----------------------------
-- Table structure for `novel_weapon`
-- ----------------------------
DROP TABLE IF EXISTS `novel_weapon`;
CREATE TABLE `novel_weapon` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '',
  `instro` varchar(500) DEFAULT '',
  `descr` varchar(500) DEFAULT '',
  `img` varchar(50) DEFAULT '',
  `showt_time` datetime DEFAULT NULL,
  `address` varchar(200) DEFAULT '',
  `create_time` datetime DEFAULT NULL,
  `noval_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel_weapon
-- ----------------------------
INSERT INTO `novel_weapon` VALUES ('1', '黑曜', '', '邪剑黑曜，旷世奇兵', 'sect/1.png', null, '', null, '1');
INSERT INTO `novel_weapon` VALUES ('2', '银枪', '', '百鸟朝凤，惊艳一枪', 'sect/2.png', '0000-00-00 00:00:00', '', null, '1');
