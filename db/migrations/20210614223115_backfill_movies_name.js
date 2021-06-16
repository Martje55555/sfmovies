'use strict';

exports.up = function (Knex) {
  return Knex.raw('UPDATE movies SET name = name');
};

exports.down = function (Knex, Promise) {
  return Promise.resolve();
};
