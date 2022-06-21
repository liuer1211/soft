'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    let res = await service.home.index();
    // console.log('res=',res);
    ctx.body = res;
  }
}

module.exports = HomeController;
