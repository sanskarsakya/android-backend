
exports.up = function (knex, Promise) {
    return knex.schema.createTable('exams', (table) => {
        table.increments('id').unsigned().primary();
        table.string('name');
        table.date('exam_date');
        table.integer('full_mark_theory');
        table.integer('full_mark_practical');
        table.integer('pass_mark_theory');
        table.integer('pass_mark_practical');
        table.date('created_at').defaultTo(knex.fn.now());
        table.date('modified_at');
        table.date('deleted_at');
        table.boolean('is_deleted').defaultTo(false);
        table.integer('year');
        table.integer('school_id').unsigned().references('schools.id');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('exams');
};
