'use strict';

exports.up = function (Knex) {
  return Knex.schema.table('movies', (table) => {
    table.dropColumn('name');
  })
    .then(() => {
      return Knex.raw('ALTER TABLE movies ADD CONSTRAINT movies_name_not_null CHECK (name IS NOT NULL) NOT VALID')
        .then(() => {
          return Knex.raw('ALTER TABLE movies VALIDATE CONSTRAINT movies_name_not_null');
        });
    });
};

exports.down = function (Knex) {
  return Knex.schema.table('movies', (table) => {
    table.text('name');
  })
    .then(() => {
      return Knex.raw('ALTER TABLE movies DROP CONSTRAINT movies_name_not_null');
    });
};
