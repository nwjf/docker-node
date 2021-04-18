'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // redis
  router.get('/redis/list', controller.home.redisList);
  router.post('/redis/add', controller.home.redisAdd);
  router.post('/redis/del', controller.home.redisDel)
};
