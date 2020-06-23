exports.up = function (knex, Promise) {
  return knex.schema.createTable('clasz_services', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('class_id').unsigned().references('classes.id');
    table.integer('service_id').unsigned().references('services.id');
    table.integer('amount');
    table.date('created_at').defaultTo(knex.fn.now());
    table.date('modified_at');
    table.date('deleted_at');
    table.boolean('is_deleted').defaultTo(false);
    table.integer('year');
    table.integer('school_id').unsigned().references('schools.id');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('clasz_services');
};

