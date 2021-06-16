'use strict';

exports.up = (Knex) => {
  return Knex.schema.createTable('movies', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.integer('release_year');
  });
};

exports.down = (Knex) => {
  return Knex.schema.dropTable('movies');
};
