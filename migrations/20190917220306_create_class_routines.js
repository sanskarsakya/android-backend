
exports.up = function (knex, Promise) {
    return knex.schema.createTable('class_routines', (table) => {
        table.increments('id').unsigned().primary();
        table.integer('period_order');
        table.integer('class_id').unsigned().references('classes.id');
        table.integer('section_id').unsigned().references('sections.id');
        table.integer('subject_id').unsigned().references('subjects.id');
        table.integer('teacher_id').unsigned().references('teachers.id');
        table.date('created_at').defaultTo(knex.fn.now());
        table.date('modified_at');
        table.date('deleted_at');
        table.boolean('is_deleted').defaultTo(false);
        table.integer('year');
        table.integer('school_id').unsigned().references('schools.id');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('class_routines');
};
