'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // mysql配置
  mysql: {
    enable: true,
    package: 'egg-mysql'
  }
};
