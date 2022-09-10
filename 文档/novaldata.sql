/*
Navicat MySQL Data Transfer

Source Server         : nodelyun
Source Server Version : 50650
Source Host           : 180.76.106.221:3306
Source Database       : novaldata

Target Server Type    : MYSQL
Target Server Version : 50650
File Encoding         : 65001

Date: 2022-09-10 15:43:31
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of noval
-- ----------------------------
INSERT INTO `noval` VALUES ('1', 
'0000001', 
'夜灵犀传奇', 
'六耳', '01,02',
'武侠/爱情', 
'20220522', 
'年少热血气如虹，暮年病榻万事空。江湖纷争何时休，笑看痴人坠其中。', 
'<p>何为侠，总说行侠仗义。侠可谓助人为乐，此为侠之始也。路见不平，拔刀相助，此为侠之小成。穷则独善其身，达则兼济天下，此为侠之大者。</p><p>相传三国时期，铸剑名家欧冶子打造了三把赫赫有名的宝剑，分别是：黑曜、赤灵、素渊。传闻只要三者得其一便可得天下，而这三把宝剑也被魏蜀吴三国的君主各占其一。随着时代的更迭，这三把宝剑也辗转不知了去向。</p><p>几百年过去了，有传言这三把宝剑之一的黑曜在小重山现世。霎时间，江湖波澜四起。有传闻黑曜是最为妖邪的一柄剑，它还藏有一个更为惊人的秘密。</p><p>曾记得，十年前，一位年纪不满二十的少年横空出世，打破了沉寂已久的江湖，此人便是夜灵犀。没有人知道这少年从何处来，师承何门何派，只记得他只身一人前往少林，挑战主持方丈后全身而退。如今，黑曜现世，又将会带给他怎样的劫数。', 
'1.jpg', 
'001.mp4', 
'2022-05-22 21:27:50',
 '2022-07-15 22:45:27');
INSERT INTO `noval` VALUES ('2', '0000002', '血雨江湖', '六耳', '01,02', '武侠/爱情', '20211010', '', null, '2.jpg', '', '2022-08-14 18:47:40', '2022-08-14 19:09:28');

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
  `descr` varchar(2000) DEFAULT '',
  `img` varchar(50) DEFAULT '',
  `showt_time` datetime DEFAULT NULL,
  `address` varchar(200) DEFAULT '',
  `create_time` datetime DEFAULT NULL,
  `noval_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel_fatalism
-- ----------------------------
INSERT INTO `novel_fatalism` VALUES ('1', 
'夜灵犀、恒叶方丈',
 '初试江湖', 
 '<p>夜灵犀，十八岁那年，奉师命前往少林，与少林神僧绝尘大师请教武艺。然而，并未未见绝尘大师。之后，恒叶方丈出面与愿之切磋几手。只见二人移步后山，进行比试。</p><p>两人先是简单的试探了武功招式，在这顷刻间已是互过了百余招。后又是使出了自己的看家本领，只见夜灵犀拂袖一挥，剑气纵横。恒叶方丈，随即使出伏魔袈裟功与之抗衡。又拆了几十招，两人竟打的难分伯仲。最后两人纷纷罢手，各站一边，欲以一招定胜负。</p><p>夜灵犀缓缓抬手，周身剑气环绕，霎时间飞沙走石，狂风大作。而方丈则是双手合十，紧闭双目，以逸待劳。刹那间，夜灵犀锦绣一挥，一道剑气直逼方丈而来。方丈依旧纹丝不动，只在剑气将近未近之际，挣开双目，蓄力反击。转瞬间，一股气浪将在场僧人尽数掀翻在地。夜灵犀则是后退七步，只觉胸口气血翻涌，久久不能平复。而方丈也是后撤十三步，但其却稳稳立住，呼吸间已无大碍。</p><p>此战，终以方丈胜出，但这少年竟能与方丈比试的有来有回，属实后生可畏。此后关于夜灵犀的大名悄然遍布整个武林。</p><p>在夜灵犀临走时，方丈送予其一封信，说是故人不便相见。待夜灵犀回去后，将整个经历说与他师父，又将信交由他师父。宁云天看完信件后，大笑不语。</p><p>几日后，夜灵犀如往常一样醒来，却不见其师父。只见石桌上留有一张字条，写道：为师去也，徒儿亦可去也。夜灵犀不明何意，只觉师父出去些日子，过些时日便会回来。可谁料，几个月过去了，师父依旧不见回来。于是乎，夜灵犀也下了山，先到了少林，欲打探其师父踪迹。</p><p>恒叶大师向夜灵犀说起了宁云天和绝尘的往事。七十年前，宁云天和其绝尘一见如故，之后变成了知己好友。二十年前，在二人隐退之际，他们相约若是百年之后还在人世，便叫自己的得意门徒进行一场比试，按约定数月前便是百年之期。夜灵犀也正如约而至，只是绝尘大师有意壁之。</p><p>十八年前绝尘师叔一次外出，偶然捡回一个弃婴，留于寺中。绝尘师傅本想收其为徒，授其武艺，百年之约也好有个徒儿为自己出面。但又碍于辈分规矩，于是将其归入方丈门下。此徒名为妙乐，他除了和方丈学习佛法，又时常向绝尘大师请教武功，加之其天资聪颖，小小年纪便及佛法与武功于大成了。</p><p>听完，夜灵犀笑道，佛门讲究四大皆空，没想到也拘泥于规矩。而他对这位妙乐和尚更是十分好奇，心中又满是疑惑，那日他为何没有出面与他切磋武艺。</p><p>只见得恒叶大师长叹一声，说道，佛门中人不一定各个个潜心向佛，佛门外的人不一定个个心中无佛。世人往往喜欢把特立独行的教派冠之以邪魔的名号。而绝尘大师的身世也是正邪参半，若是收了妙乐为徒不仅坏了规矩，同时也会给妙乐带去诸多不便。上次比武前，妙乐也是被早早安排下了山，避开了此次决斗。以妙乐的名望将来有机会继任掌门之位，此次比试若是输了，不仅影响少林名誉，更加会遭到众人的质疑。再加上他的武功多半是和绝尘大师学的，万一被众人看出，又会惹人非议。出于种种考量，便打消了让妙乐出面的念头。\r\n夜灵犀也没想到，简简单单的一场比试，竟有如此复杂的顾虑。之后，又想拜见一下绝尘大师。</p><p>方丈说道，绝尘大师已于两个月前离开了少林，推算下来，大概很可能是和夜灵犀的师父宁云天，一起云游四方去了。</p><p>夜灵犀听闻，也算是安心了，随即边想着留在少林，和方丈讨教些佛法禅理。</p><p>方丈谦虚的说道，他已没有什么能教的了。随后修书一封，交给了夜灵犀。让其到其他门派走走，历练历练。临走时又嘱咐了几句，说是日后是见到妙乐徒儿，还请让着点。</p><p>妙乐是个急性子，听闻上次来少林与方丈比试，他便记在了心里。回寺后，又急着出去了。这都过了好些日了，仍是未归，估计是想找到夜灵犀再次进行一场决斗。</p><p>夜灵犀应了下来，之后也没有逗留太久，便匆匆离去了。</p>', 
 '', 
 null, 
 '少林寺', 
 null,
  '1');
INSERT INTO `novel_fatalism` VALUES ('2',
 '夜灵犀、百里梦、妙乐', '山庄论剑', 
 '', '', null, '名剑山庄', null, '1');
INSERT INTO `novel_fatalism` VALUES ('3', 
'夜灵犀、朱四爷', '秘密会谈', '', '', null, '月与楼', null, '1');
INSERT INTO `novel_fatalism` VALUES ('4', '夜灵犀、苏晚', '香楼听曲', '', '', null, '月与楼', null, '1');
INSERT INTO `novel_fatalism` VALUES ('5', '夜灵犀、李玉帛、陆秋艳', '故人重逢', '', '', null, '夜宴楼', null, '1');
INSERT INTO `novel_fatalism` VALUES ('6', '夜灵犀、程瞎子、苏晚', '投石问路', '', '', null, '吉祥赌坊', null, '1');
INSERT INTO `novel_fatalism` VALUES ('7', '夜灵犀、苏晚', '瘟疫横行', '', '', null, '', null, '1');
INSERT INTO `novel_fatalism` VALUES ('8', '百里梦、解甲、妙乐、落梅', '湖心了断', '', '', null, '', null, '1');
INSERT INTO `novel_fatalism` VALUES ('9', '夜灵犀、风花雪月', '风花雪月', '', '', null, '', null, '1');
INSERT INTO `novel_fatalism` VALUES ('10', '夜灵犀、韩老伯', '飞驴山庄', '', '', null, '飞驴山庄', null, '1');
INSERT INTO `novel_fatalism` VALUES ('11', '夜灵犀、苏晚', '崖底真情', '', '', null, '', null, '1');
INSERT INTO `novel_fatalism` VALUES ('12', '夜灵犀、李玉帛、李怀唐', '瓮中捉鳖', '', '', null, '', null, '1');
INSERT INTO `novel_fatalism` VALUES ('13', '夜灵犀、李玉帛', '山崖决战', '', '', null, '小重山', null, '1');
INSERT INTO `novel_fatalism` VALUES ('14', '夜灵犀、苏晚', '疑云重重', '', '', null, '名剑山庄', null, '1');

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
INSERT INTO `novel_kungfu` VALUES ('3', 
'乾坤生死决', 
null, 
null,
 null, 
 '2022-07-16 16:15:35', 
 '1');
INSERT INTO `novel_kungfu` VALUES ('4', 
'燕云七绝', 
null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('5', 
'扶摇九天', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('6', '迷魂大法', null, null, null, '2022-07-16 16:15:35', '1');
INSERT INTO `novel_kungfu` VALUES ('7', '回天绝响', null, null, null, '2022-07-16 16:15:35', '1');
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
INSERT INTO `novel_other` VALUES ('1',
 '六耳', 
 '影成双', 
 '<p>夜微凉</p><p>月照窗</p><p>轻舟过小桥</p><p>倩影泛波光</p><p>仙衣衬玉指 朱唇配红妆</p><p>举止半含羞 柔情两相望</p><p>曾经沧海 最是牵人肠</p><p>地老天荒 终是将身藏</p><br/> <p>窗外明月如常</p><p>你我再见渺茫</p><p>孤星依旧现微光</p><p>而我只能将你深藏</p> <p>晚风轻抚脸庞</p> <p>刻意掀起过往</p> <p>坐看星河两相傍</p> <p>轻舟涟漪影成双</p><br/> <p>风作响</p><p>柳轻扬</p> <p>刀剑掠残影</p> <p>眉宇现寒光</p> <p>古今名与利 好似梦一场</p> <p>江湖多风雨 岁月显沧桑</p> <p>锦袖一挥 断念隐街巷</p> <p>拂尘而去 且将余生藏</p><br/> <p>窗外明月如常</p> <p>你我再见渺茫</p> <p>孤星依旧现微光</p> <p>而我只能将你深藏</p> <p>晚风轻抚脸庞</p> <p>刻意掀起过往</p> <p>坐看星河两相傍</p> <p>轻舟涟漪影成双</p> ', 
 '', 
 null, 
 '', 
 null, '1');
INSERT INTO `novel_other` VALUES ('2', 
'六耳', 
'落日有感', 
'<p>\r\n                  信步山岭间，离别故园久。<br/>\r\n                  迎面凉风拂，不觉已入秋。<br/>\r\n                  落日照大地，余晖暖山丘。<br/>\r\n                  人生多坎坷，美景不长留。\r\n                </p>', '', null, '', null, '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel_people
-- ----------------------------
INSERT INTO `novel_people` VALUES ('1', 
'夜灵犀', 
'孑然一身真洒脱，寻欢作乐苦笑颜。世间哪得知心人，万卷愁云映眼帘。',
 '<p>夜灵犀，师承宁云天，自幼与其师父生活在漠北。在他十八岁那年，奉师命前往少林，欲与少林神僧绝尘大师请教武艺。然，并未得见。后，少林恒叶方丈出面，代其师叔与夜灵犀切磋。</p><p>此战二人竟不分伯仲，最后以夜灵犀惜败而结束。随后，夜灵犀回去复命，临走时恒叶方丈又递给其一封书信。此战，夜灵犀虽败，但其大名悄然传遍整个武林。</p><p>夜灵犀回去将信件交由其师父，几日后其师父便不告而别。只留下一张字条，写道，为师去也，徒儿亦可去也！夜灵犀只当是他师父有事下山去了，过一阵子就会回来。谁料三个月过去了，他师父仍是没有回来，之后他也离去了。首先去了少林，欲打听其师父的消息。</p><p>来到少林，恒叶方丈将他知道的事一一说给了夜灵犀。不曾想他师父和绝尘大师竟是活了百余年的故交。而绝尘大师也于两个月前离开了寺庙，云游四方去了。</p><p>夜灵犀本想留在寺内，向恒叶大师多请教请教。可恒叶方丈却说自己没有什么可以教他的了，于是便修书一封，告诉他到其他门派走走，历练历练。至此，夜灵犀辗转各大门派，期间少则逗留数月，多则逗留一年。加之之前的名头，数年下来便有了一个响亮的名号。武林中人对他的描述是：锦绣一挥，神佛难挡。</p><p>转眼已是五个年头，夜灵犀游历于江南姑苏城外，令他想不到的是这里竟是令他追悔一生之地。在这里他邂逅了陆秋荣。陆秋荣和她姐姐陆秋艳人称江南大小乔。而陆家也可谓是剑术世家，在这里更是有着举足轻重的地位。</p><p>夜灵犀一边与陆庄主讨教剑术，一边留恋在这温柔乡里，不能自拔。可好景不长，一年后与他情投意合的陆秋荣因一次意外香消玉殒。至此，他也变得十分颓废，随波逐流。</p><p>前后辗转各地，最后在京都安定了下来。在这里，他的人生有丰富了起来。与剑神百里梦品酒论剑；与青楼歌姬谈诗论对。此外，他还有着另一重秘密身份。偶有被皇帝召见，处理一些江湖之事。</p>',
  '22.jpg',
  '2022-07-15 23:04:13',
   '1', 
   '3,4,5', 
   '1');
INSERT INTO `novel_people` VALUES ('2', '苏晚', '琴瑟和鸣水云间，霓裳羽衣冲霄汉。明月仍是曾经月，皇天已非昨日天。', '', '22.jpg', '2022-07-15 23:04:13', '1', '7', '2');
INSERT INTO `novel_people` VALUES ('3', '百里梦', '剑神', '一剑流年，昔月无痕', '22.jpg', '2022-07-15 23:04:13', '1', '11', '3');
INSERT INTO `novel_people` VALUES ('4', '妙乐', '', '', '22.jpg', '2022-07-15 23:04:13', '1', '10', '4');
INSERT INTO `novel_people` VALUES ('5', '李玉帛', '人心不足', '虽集百家大成，但误入歧途，至此事件又多一段孽债', '22.jpg', '2022-07-15 23:04:13', '1', '13', '5');
INSERT INTO `novel_people` VALUES ('6', '陆秋艳', '江南第一美女', '', '22.jpg', '2022-07-15 23:04:13', '1', '13', '5');
INSERT INTO `novel_people` VALUES ('7', '落梅', '别离门走后一任，人称“妙手回春”', '无梅谷中无死人，阴阳散下无活物', null, null, '1', '14', '1');
INSERT INTO `novel_people` VALUES ('8', '陈瞎子', '国师', '占卜星象，吹拉弹唱，江湖百晓生', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('9', '陆秋荣', '陆家', '红颜薄命', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('10', '风花雪月', '幽冥宫四大弟子', '', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('11', '小蝶', '', '剑神百里梦的红颜知己', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('12', '解甲', '', '百里梦同门', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('13', '李怀唐', '', '魔教使者', '', null, '1', '7', '');
INSERT INTO `novel_people` VALUES ('14', '宁云天', '', '', '', null, '1', '3,4,5', '');
INSERT INTO `novel_people` VALUES ('15', '绝尘', '', '', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('16', '欧阳岚', '', '落鸿渊，幽冥殿，不死不灭欧阳岚', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('17', '冷面剑客', '', '', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('18', '韩老伯', '', '', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('19', '恒叶方丈', '', '', '', null, '1', '', '');
INSERT INTO `novel_people` VALUES ('20', '西域七魔', '', '', '', null, '1', '', '');

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel_sect
-- ----------------------------
INSERT INTO `novel_sect` VALUES ('1', 
'燕云山庄',
 null, 
 '四面环山，云雾缭绕，日出映月',
  null, 
  '2022-07-16 16:10:51', '1'
  );
INSERT INTO `novel_sect` VALUES ('2', 
'魔教', null, 
'断崖之上，云天之巅', 
null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('3', '名剑山庄', null, '天下一剑，亦正亦邪', null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('4', '少林寺', null, '嵩山有寺，北斗之望', null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('5', '正威镖局', null, '太湖之畔，国色天香', null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('6', '丐帮', null, '天下第一大帮', null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('7', '别离门', null, '幽谷寒舍，鸟语花香', null, '2022-07-16 16:10:51', '1');
INSERT INTO `novel_sect` VALUES ('8', 
'幽冥宫', '', 
'落鸿渊，幽冥殿', 
'', null, '1');

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
INSERT INTO `novel_weapon` VALUES ('1',
 '黑曜',
  '', 
 '邪剑黑曜，旷世奇兵',
  'sect/1.png', null, '', null, '1');
INSERT INTO `novel_weapon` VALUES ('2',
 '银枪', 
 '', 
 '百鸟朝凤，惊艳一枪', 
 'sect/2.png', '0000-00-00 00:00:00', '', null, '1');
