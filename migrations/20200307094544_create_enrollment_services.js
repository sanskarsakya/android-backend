exports.up = function (knex, Promise) {
  return knex.schema.createTable('enrollment_services', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('enrollment_id').unsigned().references('enrollments.id');
    table.integer('student_id').unsigned().references('students.id');
    table.integer('service_id').unsigned().references('clasz_services.id');
    table.date('created_at').defaultTo(knex.fn.now());
    table.date('modified_at');
    table.date('deleted_at');
    table.boolean('is_deleted').defaultTo(false);
    table.integer('year');
    table.integer('school_id').unsigned().references('schools.id');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('enrollment_services');
};

