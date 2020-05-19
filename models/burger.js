const orm = require('../config/orm');

const burger = {
  all: (cb) => {
    orm.selectAll('burgers', (res) => {
      cb(res);
    })
  },

  create: (val, cb) => {
    orm.insertOne('burgers', 'burger_name', val, (res) => {
      cb(res);
    })
  },

  update: (set, where, cb) => {
    orm.updateOne('burgers', set, where, (res) => {
      cb(res);
    })
  }
};

module.exports = burger;