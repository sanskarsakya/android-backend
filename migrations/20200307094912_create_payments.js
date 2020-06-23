exports.up = function (knex, Promise) {
  return knex.schema.createTable('payments', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('student_id').unsigned().references('enrollments.id');
    table.integer('invoice_id').unsigned().references('invoices.id');
    table.integer('amount');
    table.integer('total');
    table.boolean('is_debit').defaultTo(true); // true = user added 
    table.date('created_at').defaultTo(knex.fn.now());
    table.date('modified_at');
    table.date('deleted_at');
    table.boolean('is_deleted').defaultTo(false);
    table.integer('school_id').unsigned().references('schools.id');

  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('payments');
};

