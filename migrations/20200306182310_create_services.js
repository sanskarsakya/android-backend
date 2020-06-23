exports.up = function (knex, Promise) {
  return knex.schema.createTable('services', (table) => {
    table.increments('id').unsigned().primary();
    table.string('name');
    table.date('created_at').defaultTo(knex.fn.now());
    table.date('modified_at');
    table.date('deleted_at');
    table.boolean('is_deleted').defaultTo(false);
    table.integer('year');
    table.integer('school_id').unsigned().references('schools.id');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('services');
};

