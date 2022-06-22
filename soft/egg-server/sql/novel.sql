/*
Navicat MySQL Data Transfer

Source Server         : one
Source Server Version : 60011
Source Host           : localhost:3306
Source Database       : novel

Target Server Type    : MYSQL
Target Server Version : 60011
File Encoding         : 65001

Date: 2022-06-22 22:03:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `novel`
-- ----------------------------
DROP TABLE IF EXISTS `novel`;
CREATE TABLE `novel` (
  `id` int(24) NOT NULL AUTO_INCREMENT COMMENT '主键自增\r\n',
  `name` char(24) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel
-- ----------------------------
INSERT INTO `novel` VALUES ('1', '夜灵犀传奇');
INSERT INTO `novel` VALUES ('2', '血雨江湖');
