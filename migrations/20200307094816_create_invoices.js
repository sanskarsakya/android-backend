exports.up = function (knex, Promise) {
  return knex.schema.createTable('invoices', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('student_id').unsigned().references('enrollments.id');
    table.integer('amount');
    table.integer('month');
    table.date('created_at').defaultTo(knex.fn.now());
    table.date('modified_at');
    table.date('deleted_at');
    table.boolean('is_deleted').defaultTo(false);
    table.integer('year');
    table.integer('school_id').unsigned().references('schools.id');

  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('invoices');
};

