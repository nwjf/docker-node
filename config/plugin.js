'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.redis = {
  enable: true,
  package: 'egg-redis',
}


exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

exports.cors = {
  enable: true,
  package: 'egg-cors'
}