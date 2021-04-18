'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    await ctx.render('redis.html');
  }
  async redisList() {
    let { ctx, app } = this;
    let key = await app.redis.keys('*');
    let obj = {};
    for (let i = 0; i < key.length; i++) {
      obj[key[i]] = await app.redis.get(key[i]);
    }
    ctx.body = {
      code: 200,
      data: obj
    }
  }
  async redisAdd() {
    let { ctx, app } = this;
    let body = ctx.request.body;
    let { key, value } = body;
    app.redis.set(key, value);
    ctx.body = {
      code: 200
    }
  }
  async redisDel() {
    let { ctx, app } = this;
    let body = ctx.request.body;
    let { key, value } = body;
    app.redis.del(key);
    ctx.body = {
      code: 200
    }
  }
}

module.exports = HomeController;
