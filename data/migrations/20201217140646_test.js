
exports.up = function(knex) {
    return knex.schema.createTable('accounts', tbl => {
        tbl.increments();
        tbl.string('name')
          .notNullable()
          .unique();
        tbl.integer('budget')
          .notNullable();
      });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('accounts')
};
